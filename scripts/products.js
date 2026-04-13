// ══════════════════════════════════════
// PRODUCTS MODULE
// ══════════════════════════════════════

function initProducts() {
  // Filter chips
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => filterProducts(chip.dataset.filter, chip));
  });

  // Navbar filter buttons
  document.querySelectorAll('.nav-item[data-filter]').forEach(btn => {
    btn.addEventListener('click', () => filterProducts(btn.dataset.filter));
  });

  // Sort
  document.getElementById('sortSelect').addEventListener('change', (e) => {
    sortProducts(e.target.value);
  });

  // Search
  document.getElementById('searchBtn').addEventListener('click', doSearch);
  document.getElementById('searchInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') doSearch();
  });
  document.getElementById('clearSearch').addEventListener('click', clearSearch);

  // Product modal close
  document.getElementById('closeProduct').addEventListener('click', closeProductModal);
  document.getElementById('productBackdrop').addEventListener('click', (e) => {
    if (e.target === document.getElementById('productBackdrop')) closeProductModal();
  });

  // Modal qty
  document.getElementById('modalQtyMinus').addEventListener('click', () => changeModalQty(-1));
  document.getElementById('modalQtyPlus').addEventListener('click',  () => changeModalQty(+1));

  // Modal add to cart / buy now
  document.getElementById('modalAddToCart').addEventListener('click', modalAddToCart);
  document.getElementById('modalBuyNow').addEventListener('click',    modalBuyNow);

  // Initial render
  renderProducts(PRODUCTS);
}

// ── Render ─────────────────────────────
function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = '';

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="no-results">
        <div class="nr-icon">🔍</div>
        <p>No products found. Try a different search or filter.</p>
      </div>`;
    return;
  }

  list.forEach((p, idx) => {
    const pct     = savingsPct(p.price, p.original);
    const inCart  = !!State.cart.find(c => c.id === p.id);
    const inWish  = State.wishlist.has(p.id);

    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${idx * 40}ms`;
    card.innerHTML = `
      ${p.badge ? `<div class="badge ${badgeClass(p.badge)}">${p.badge}</div>` : ''}
      <button class="wishlist-btn ${inWish ? 'loved' : ''}" data-id="${p.id}">${inWish ? '❤️' : '🤍'}</button>

      <div class="product-img-wrap" data-id="${p.id}">
        <span class="product-emoji">${p.emoji}</span>
      </div>

      <div class="product-body">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name" data-id="${p.id}">${p.name}</div>

        <div class="stars">
          <span class="star-row">${renderStars(p.rating)}</span>
          <span class="review-count">(${p.reviews.toLocaleString()})</span>
        </div>

        <div class="price-row">
          <span class="price"><span class="price-sup">$</span>${Math.floor(p.price)}<span style="font-size:13px">.${String(p.price.toFixed(2)).split('.')[1]}</span></span>
          ${p.original ? `<span class="original-price">$${p.original.toFixed(2)}</span>` : ''}
          ${pct ? `<span class="savings">-${pct}%</span>` : ''}
        </div>

        ${p.prime ? `
          <div class="prime-row">
            <span style="font-size:14px">⭐</span>
            <span style="color:#00a8e1">prime</span>
            <span style="font-weight:400;color:#555">FREE delivery ${estimatedDelivery(true)}</span>
          </div>` : `<div style="font-size:12px;color:#888">📦 Delivery by ${estimatedDelivery(false)}</div>`}

        <div class="tracking-id-badge">🔍 ${generateTrackingId()}</div>

        <div style="font-size:12px;color:${p.stock < 30 ? 'var(--az-red)' : 'var(--az-green)'};font-weight:700;">
          ${p.stock < 30 ? `⚠️ Only ${p.stock} left in stock!` : `✅ In Stock (${p.stock} available)`}
        </div>

        <div class="qty-row">
          <span class="qty-label">Qty:</span>
          <div class="qty-control">
            <button class="qty-btn minus-btn" data-id="${p.id}">−</button>
            <span class="qty-display" id="qty-${p.id}">1</span>
            <button class="qty-btn plus-btn"  data-id="${p.id}">+</button>
          </div>
        </div>

        <button class="add-btn ${inCart ? 'added' : ''}" data-id="${p.id}">
          ${inCart ? '✔ Added to Cart' : '🛒 Add to Cart'}
        </button>
      </div>`;

    // Events
    card.querySelector('.wishlist-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      toggleWishlist(p.id, e.currentTarget);
    });

    card.querySelector('.product-img-wrap').addEventListener('click', () => openProductModal(p.id));
    card.querySelector('.product-name').addEventListener('click',      () => openProductModal(p.id));
    card.querySelector('.review-count').addEventListener('click',      () =>
      showToast(`${p.reviews.toLocaleString()} customer reviews for "${p.name.substring(0,25)}..."`, '⭐'));

    card.querySelector('.minus-btn').addEventListener('click', () => adjustCardQty(p.id, -1));
    card.querySelector('.plus-btn').addEventListener('click',  () => adjustCardQty(p.id, +1));
    card.querySelector('.add-btn').addEventListener('click',   () => {
      const qty = parseInt(document.getElementById(`qty-${p.id}`).textContent);
      addToCart(p.id, qty);
    });

    grid.appendChild(card);
  });
}

// ── Card qty ───────────────────────────
function adjustCardQty(id, delta) {
  const el  = document.getElementById(`qty-${id}`);
  if (!el) return;
  let val = parseInt(el.textContent) + delta;
  if (val < 1) val = 1;
  if (val > 10) val = 10;
  el.textContent = val;
}

// ── Wishlist ───────────────────────────
function toggleWishlist(id, btn) {
  if (State.wishlist.has(id)) {
    State.wishlist.delete(id);
    btn.textContent = '🤍';
    btn.classList.remove('loved');
    showToast('Removed from wishlist', '💔');
  } else {
    State.wishlist.add(id);
    btn.textContent = '❤️';
    btn.classList.add('loved');
    showToast('Saved to wishlist! ❤️', '❤️');
  }
}

// ── Filter ─────────────────────────────
function filterByCategory(cat) {
  return cat === 'all' ? [...PRODUCTS] : PRODUCTS.filter(p => p.category === cat);
}

function filterProducts(cat, btn) {
  State.activeFilter = cat;
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResultsBar').classList.remove('visible');

  document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
  if (btn) btn.classList.add('active');
  else {
    const matchChip = document.querySelector(`.filter-chip[data-filter="${cat}"]`);
    if (matchChip) matchChip.classList.add('active');
  }

  State.filteredProducts = filterByCategory(cat);
  renderProducts(State.filteredProducts);
}

// ── Sort ───────────────────────────────
function sortProducts(val) {
  const list = [...State.filteredProducts];
  if (val === 'price-low')  list.sort((a, b) => a.price - b.price);
  if (val === 'price-high') list.sort((a, b) => b.price - a.price);
  if (val === 'rating')     list.sort((a, b) => b.rating - a.rating);
  if (val === 'newest')     list.sort((a, b) => b.id - a.id);
  renderProducts(list);
}

// ── Search ─────────────────────────────
function doSearch() {
  const q   = document.getElementById('searchInput').value.trim().toLowerCase();
  const bar = document.getElementById('searchResultsBar');
  const txt = document.getElementById('searchResultsText');

  if (!q) { clearSearch(); return; }

  State.filteredProducts = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.brand.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.desc.toLowerCase().includes(q)
  );

  bar.classList.add('visible');
  txt.innerHTML = `<strong>${State.filteredProducts.length}</strong> result(s) for "<strong>${q}</strong>"`;
  renderProducts(State.filteredProducts);
}

function clearSearch() {
  document.getElementById('searchInput').value = '';
  document.getElementById('searchResultsBar').classList.remove('visible');
  State.filteredProducts = filterByCategory(State.activeFilter);
  renderProducts(State.filteredProducts);
}

// ── Product Detail Modal ───────────────
function openProductModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  State.currentProductId = id;
  State.modalQty = 1;
  document.getElementById('modalQtyDisplay').textContent = '1';

  document.getElementById('productModalImg').textContent   = p.emoji;
  document.getElementById('productModalName').textContent  = p.name;
  document.getElementById('productModalBrand').textContent = `by ${p.brand}`;
  document.getElementById('productModalStars').textContent = renderStars(p.rating) + ` (${p.reviews.toLocaleString()} reviews)`;

  const pct = savingsPct(p.price, p.original);
  document.getElementById('productModalPrice').textContent   = `$${p.price.toFixed(2)}`;
  document.getElementById('productModalSavings').textContent = pct ? `-${pct}% (You save $${(p.original - p.price).toFixed(2)})` : '';
  document.getElementById('productModalPrime').textContent   = p.prime ? `⭐ FREE delivery by ${estimatedDelivery(true)}` : `📦 Delivery by ${estimatedDelivery(false)}`;
  document.getElementById('productModalTracking').textContent = `Tracking ID: ${generateTrackingId()}  |  ${p.stock} in stock`;
  document.getElementById('productModalDesc').textContent    = p.desc;

  document.getElementById('productBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  document.getElementById('productBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function changeModalQty(delta) {
  State.modalQty = Math.max(1, Math.min(10, State.modalQty + delta));
  document.getElementById('modalQtyDisplay').textContent = State.modalQty;
}

function modalAddToCart() {
  if (!State.currentProductId) return;
  addToCart(State.currentProductId, State.modalQty);
  closeProductModal();
}

function modalBuyNow() {
  if (!State.currentProductId) return;
  addToCart(State.currentProductId, State.modalQty);
  closeProductModal();
  setTimeout(() => {
    openCart();
    setTimeout(() => doCheckout(), 400);
  }, 300);
}
