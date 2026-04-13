// ══════════════════════════════════════
// CART MODULE
// ══════════════════════════════════════

function initCart() {
  document.getElementById('cartBtn').addEventListener('click', openCart);
  document.getElementById('closeCartBtn').addEventListener('click', closeCart);
  document.getElementById('overlay').addEventListener('click', closeCart);
  document.getElementById('checkoutBtn').addEventListener('click', doCheckout);
  document.getElementById('continueShoppingBtn').addEventListener('click', closeCart);
}

// ── Open / Close ───────────────────────
function openCart() {
  renderCartDrawer();
  document.getElementById('cartDrawer').classList.add('open');
  document.getElementById('overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartDrawer').classList.remove('open');
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ── Add to cart ────────────────────────
function addToCart(productId, qty = 1) {
  const product  = PRODUCTS.find(p => p.id === productId);
  const existing = State.cart.find(c => c.id === productId);

  if (existing) {
    existing.qty += qty;
  } else {
    State.cart.push({
      ...product,
      qty,
      trackingId: generateTrackingId()
    });
  }

  updateCartCount();
  bumpCartIcon();

  // Update button on card
  const btn = document.querySelector(`.add-btn[data-id="${productId}"]`);
  if (btn) { btn.className = 'add-btn added'; btn.textContent = '✔ Added to Cart'; }

  showToast(`${product.emoji} Added to cart!`, '🛒');
}

// ── Remove from cart ───────────────────
function removeFromCart(productId) {
  State.cart = State.cart.filter(c => c.id !== productId);
  updateCartCount();
  renderCartDrawer();

  // Reset button on card
  const btn = document.querySelector(`.add-btn[data-id="${productId}"]`);
  if (btn) { btn.className = 'add-btn'; btn.textContent = '🛒 Add to Cart'; }

  showToast('Item removed from cart', '🗑');
}

// ── Cart count & icon ──────────────────
function updateCartCount() {
  const total = State.cart.reduce((s, i) => s + i.qty, 0);
  document.getElementById('cartCount').textContent = total;
  document.getElementById('cartItemCount').textContent = total;
}

function bumpCartIcon() {
  const el = document.getElementById('cartCount');
  el.classList.add('bump');
  setTimeout(() => el.classList.remove('bump'), 420);
}

// ── Render cart drawer ─────────────────
function renderCartDrawer() {
  const container = document.getElementById('cartItems');

  if (State.cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <div class="empty-icon">🛒</div>
        <p style="font-size:16px;font-weight:700">Your cart is empty</p>
        <p style="font-size:13px;margin-top:8px;color:#bbb">Add items to get started!</p>
      </div>`;
  } else {
    container.innerHTML = State.cart.map(item => `
      <div class="cart-item">
        <span class="ci-emoji">${item.emoji}</span>
        <div class="ci-info">
          <div class="ci-name">${item.name}</div>
          <div class="ci-price">$${(item.price * item.qty).toFixed(2)}</div>
          <div class="ci-sub">Qty: ${item.qty} × $${item.price.toFixed(2)}</div>
          <div class="ci-tid">🔍 ${item.trackingId}</div>
          <div style="font-size:11px;color:${item.prime ? '#007eb9' : '#888'};margin-top:2px">
            ${item.prime ? '⭐ FREE delivery by ' : '📦 Delivery by '}${estimatedDelivery(item.prime)}
          </div>
        </div>
        <button class="ci-remove" data-id="${item.id}">🗑</button>
      </div>`).join('');

    container.querySelectorAll('.ci-remove').forEach(btn => {
      btn.addEventListener('click', () => removeFromCart(Number(btn.dataset.id)));
    });
  }

  const subtotal = State.cart.reduce((s, i) => s + i.price * i.qty, 0);
  document.getElementById('cartTotal').textContent = `$${subtotal.toFixed(2)}`;
}

// ── Checkout ───────────────────────────
function doCheckout() {
  if (State.cart.length === 0) {
    showToast('Your cart is empty! Add some items first.', '🛒');
    return;
  }
  if (!State.user) {
    closeCart();
    showToast('Please sign in to checkout', '👤');
    setTimeout(() => openSigninModal(), 400);
    return;
  }

  const subtotal = State.cart.reduce((s, i) => s + i.price * i.qty, 0);
  const orderId  = generateOrderId();
  const tid      = generateTrackingId();

  const statuses = ['Order Placed', 'Shipped', 'Out for Delivery', 'Delivered'];
  const status   = statuses[Math.floor(Math.random() * statuses.length)];

  State.orders.unshift({
    orderId,
    trackingId: tid,
    date: new Date().toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' }),
    total: subtotal,
    location: `${State.location.city}, ${State.location.country}`,
    status,
    items: State.cart.map(i => ({ emoji: i.emoji, name: i.name, qty: i.qty, price: i.price }))
  });

  // Reset cart
  State.cart = [];
  updateCartCount();
  closeCart();
  renderProducts(State.filteredProducts);

  showToast(`🎉 Order placed! ID: ${orderId}`, '🎉');
  setTimeout(() => showToast(`📦 Tracking: ${tid}`, '📦'), 3200);
}
