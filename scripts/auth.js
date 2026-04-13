// ══════════════════════════════════════
// AUTH MODULE
// ══════════════════════════════════════

function initAuth() {
  // Header account button opens dropdown
  const accountBtn = document.getElementById('accountBtn');
  accountBtn.addEventListener('click', () => {
    if (!State.user) openSigninModal();
  });

  // Dropdown sign-in button
  document.getElementById('ddSigninBtn').addEventListener('click', openSigninModal);
  document.getElementById('ddCreateBtn').addEventListener('click', (e) => {
    e.preventDefault();
    openSigninModal('create');
  });

  // Dropdown signed-in links
  document.getElementById('ddOrders').addEventListener('click', (e) => {
    e.preventDefault();
    openOrdersModal();
  });
  document.getElementById('ddWishlist').addEventListener('click', (e) => {
    e.preventDefault();
    showWishlistToast();
  });
  document.getElementById('ddSignOut').addEventListener('click', (e) => {
    e.preventDefault();
    signOut();
  });

  // Modal close
  document.getElementById('closeSignin').addEventListener('click', closeSigninModal);
  document.getElementById('signinBackdrop').addEventListener('click', (e) => {
    if (e.target === document.getElementById('signinBackdrop')) closeSigninModal();
  });

  // Continue button (step 1)
  document.getElementById('continueBtn').addEventListener('click', signinStep2);
  document.getElementById('signinEmail').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') signinStep2();
  });

  // Sign-in button (step 2)
  document.getElementById('doSignin').addEventListener('click', doSignin);
  document.getElementById('signinPassword').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') doSignin();
  });

  // Toggle between views
  document.getElementById('goCreateAccount').addEventListener('click', () => showAuthView('create'));
  document.getElementById('goSignin').addEventListener('click',         () => showAuthView('signin'));

  // Register button
  document.getElementById('doRegister').addEventListener('click', doRegister);
}

function openSigninModal(view = 'signin') {
  showAuthView(view);
  document.getElementById('signinBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSigninModal() {
  document.getElementById('signinBackdrop').classList.remove('open');
  document.body.style.overflow = '';
  // Reset
  document.getElementById('signinEmail').value    = '';
  document.getElementById('signinPassword').value = '';
  showAuthView('signin');
}

function showAuthView(view) {
  document.getElementById('signinView').style.display         = view === 'signin'  ? '' : 'none';
  document.getElementById('signinPasswordView').style.display = view === 'password'? '' : 'none';
  document.getElementById('createAccountView').style.display  = view === 'create'  ? '' : 'none';
}

function signinStep2() {
  const email = document.getElementById('signinEmail').value.trim();
  if (!email) {
    shakeInput('signinEmail');
    showToast('Please enter your email or phone number', '⚠️');
    return;
  }
  document.getElementById('signinEmailLabel').textContent = email;
  showAuthView('password');
  setTimeout(() => document.getElementById('signinPassword').focus(), 100);
}

function doSignin() {
  const email    = document.getElementById('signinEmail').value.trim();
  const password = document.getElementById('signinPassword').value;

  if (!password) {
    shakeInput('signinPassword');
    showToast('Please enter your password', '⚠️');
    return;
  }

  // Simulate authentication (accept any non-empty password)
  const name = email.split('@')[0]
    .replace(/[^a-zA-Z]/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .trim() || 'Customer';

  State.user = { name, email };
  updateAccountUI();
  closeSigninModal();
  showToast(`Welcome back, ${name}! 👋`, '✅');
}

function doRegister() {
  const name  = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass1 = document.getElementById('regPassword').value;
  const pass2 = document.getElementById('regPassword2').value;

  if (!name)          { shakeInput('regName');      showToast('Please enter your name', '⚠️');             return; }
  if (!email)         { shakeInput('regEmail');     showToast('Please enter your email', '⚠️');            return; }
  if (pass1.length < 6){ shakeInput('regPassword'); showToast('Password must be at least 6 characters', '⚠️'); return; }
  if (pass1 !== pass2){ shakeInput('regPassword2'); showToast('Passwords do not match', '⚠️');             return; }

  State.user = { name, email };
  updateAccountUI();
  closeSigninModal();
  showToast(`Account created! Welcome, ${name}! 🎉`, '🎉');
}

function signOut() {
  State.user = null;
  updateAccountUI();
  showToast('You have been signed out. See you soon! 👋', '👋');
}

function updateAccountUI() {
  const name       = document.getElementById('accountName');
  const signedOut  = document.getElementById('dropdownSignedOut');
  const signedIn   = document.getElementById('dropdownSignedIn');
  const ddName     = document.getElementById('ddUserName');

  if (State.user) {
    name.textContent    = State.user.name.split(' ')[0];
    signedOut.style.display = 'none';
    signedIn.style.display  = '';
    ddName.textContent  = State.user.name;
    // Update location modal too
    document.getElementById('locationUserName').textContent = State.user.name;
    document.getElementById('locationSignedIn').style.display = '';
  } else {
    name.textContent    = 'sign in';
    signedOut.style.display = '';
    signedIn.style.display  = 'none';
    document.getElementById('locationSignedIn').style.display = 'none';
  }
}

function showWishlistToast() {
  const count = State.wishlist.size;
  if (count === 0) {
    showToast('Your wishlist is empty. Start saving items! ❤️', '❤️');
  } else {
    showToast(`You have ${count} item(s) in your wishlist ❤️`, '❤️');
  }
}

// ── Orders Modal ────────────────────────
function openOrdersModal() {
  renderOrdersModal();
  document.getElementById('ordersBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeOrdersModal() {
  document.getElementById('ordersBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function renderOrdersModal() {
  const content = document.getElementById('ordersContent');

  if (State.orders.length === 0) {
    content.innerHTML = `
      <div class="no-orders">
        <div class="no-icon">📦</div>
        <p>No orders yet.</p>
        <p style="font-size:13px;margin-top:6px;color:#aaa">Your orders will appear here after checkout.</p>
      </div>`;
    return;
  }

  content.innerHTML = State.orders.map(order => {
    const trackPct = order.status === 'Delivered' ? 100 :
                     order.status === 'Out for Delivery' ? 75 :
                     order.status === 'Shipped' ? 50 : 25;
    const itemsHtml = order.items.map(item => `
      <div class="order-item-row">
        <span class="order-item-emoji">${item.emoji}</span>
        <div>
          <div style="font-weight:700">${item.name}</div>
          <div style="color:#888;font-size:12px">Qty: ${item.qty} × $${item.price.toFixed(2)}</div>
        </div>
        <div style="margin-left:auto;font-weight:700">$${(item.qty * item.price).toFixed(2)}</div>
      </div>`).join('');
    return `
      <div class="order-card">
        <div class="order-card-header">
          <div><span class="oh-label">ORDER PLACED</span><br><span class="oh-val">${order.date}</span></div>
          <div><span class="oh-label">TOTAL</span><br><span class="oh-val">$${order.total.toFixed(2)}</span></div>
          <div><span class="oh-label">SHIP TO</span><br><span class="oh-val">${order.location}</span></div>
          <div style="margin-left:auto"><span class="oh-label">ORDER #</span><br><span class="oh-val" style="font-size:11px">${order.orderId}</span></div>
        </div>
        <div class="order-card-body">
          ${itemsHtml}
          <div class="tracking-bar"><div class="tracking-bar-fill" style="width:${trackPct}%"></div></div>
          <div class="tracking-status">📦 ${order.status} · Tracking: ${order.trackingId}</div>
        </div>
      </div>`;
  }).join('');
}

// ── Input shake animation ──────────────
function shakeInput(id) {
  const el = document.getElementById(id);
  el.style.border = '1px solid red';
  el.style.animation = 'shake 0.3s ease';
  setTimeout(() => { el.style.border = ''; el.style.animation = ''; }, 600);
}
