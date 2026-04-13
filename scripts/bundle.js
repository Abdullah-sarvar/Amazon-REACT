// ══════════════════════════════════════
// PRODUCTS DATA
// ══════════════════════════════════════
const PRODUCTS = [
  {
    id: 1,
    emoji: '🧦',
    name: 'Black & Gray Athletic Cotton Socks - 6 Pairs',
    brand: 'SockPro',
    price: 10.90,
    original: 14.99,
    rating: 4.5,
    reviews: 87,
    category: 'clothing',
    badge: 'SALE',
    prime: true,
    desc: 'Premium quality athletic socks made from 100% breathable cotton. Reinforced heel and toe for extra durability. Perfect for sports, gym, and everyday wear. Machine washable. Available in sizes S-XL.',
    features: ['100% breathable cotton', 'Reinforced heel & toe', 'Machine washable', 'Anti-odor technology'],
    stock: 142
  },
  {
    id: 2,
    emoji: '🏀',
    name: 'Intermediate Size Composite Basketball',
    brand: 'SportKing',
    price: 20.95,
    original: null,
    rating: 4.0,
    reviews: 127,
    category: 'sports',
    badge: null,
    prime: true,
    desc: 'Official intermediate size 28.5" basketball with composite leather cover. Deep channel design for superior grip and control. Suitable for both indoor and outdoor courts.',
    features: ['Composite leather cover', 'Deep channel design', 'Indoor & outdoor', 'Official size 28.5"'],
    stock: 58
  },
  {
    id: 3,
    emoji: '👕',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    brand: 'ComfortWear',
    price: 7.99,
    original: 12.00,
    rating: 4.5,
    reviews: 56,
    category: 'clothing',
    badge: 'SALE',
    prime: false,
    desc: 'Soft, pre-shrunk 100% cotton t-shirts. Available in teal, white, black, and gray. Relaxed fit for maximum comfort. Perfect for casual wear, layering, or workouts.',
    features: ['Pre-shrunk cotton', 'Relaxed fit', 'Multiple colors', 'Pack of 2'],
    stock: 230
  },
  {
    id: 4,
    emoji: '🎧',
    name: 'Wireless Bluetooth Earbuds Pro X',
    brand: 'SoundMax',
    price: 29.99,
    original: 49.99,
    rating: 4.5,
    reviews: 312,
    category: 'electronics',
    badge: 'HOT',
    prime: true,
    desc: 'True wireless earbuds with active noise cancellation and transparency mode. 8-hour battery + 24-hour charging case. IPX5 water resistant. Crisp Hi-Fi sound with deep bass.',
    features: ['Active noise cancellation', '32hr total battery', 'IPX5 waterproof', 'Touch controls'],
    stock: 85
  },
  {
    id: 5,
    emoji: '⚽',
    name: 'Professional Match Football - Size 5',
    brand: 'SportKing',
    price: 18.50,
    original: null,
    rating: 4.0,
    reviews: 203,
    category: 'sports',
    badge: null,
    prime: true,
    desc: 'FIFA-approved professional match football. Thermally bonded panels for a perfect round shape and consistent flight. Suitable for all weather conditions and playing surfaces.',
    features: ['FIFA approved', 'Thermally bonded', 'All-weather', 'Official size 5'],
    stock: 41
  },
  {
    id: 6,
    emoji: '💻',
    name: 'Adjustable Aluminum Laptop Stand Pro',
    brand: 'DeskMate',
    price: 35.00,
    original: 45.00,
    rating: 5.0,
    reviews: 489,
    category: 'electronics',
    badge: 'NEW',
    prime: true,
    desc: 'Ergonomic aluminum laptop stand with 6 adjustable height angles. Foldable and ultra-portable. Compatible with 10–17 inch laptops and tablets. Non-slip silicone pads protect your device.',
    features: ['6 height angles', 'Non-slip silicone', '10-17" compatible', 'Foldable design'],
    stock: 67
  },
  {
    id: 7,
    emoji: '🍱',
    name: 'Meal Prep Container Set - 5 Pack',
    brand: 'FreshFit',
    price: 15.99,
    original: 22.00,
    rating: 4.0,
    reviews: 167,
    category: 'food',
    badge: 'DEAL',
    prime: false,
    desc: 'BPA-free meal prep containers with air-tight locking lids. Microwave, dishwasher, and freezer safe. Perfect for gym meal prep, diet plans, and food storage.',
    features: ['BPA-free material', 'Air-tight lids', 'Microwave safe', 'Pack of 5'],
    stock: 120
  },
  {
    id: 8,
    emoji: '🖱️',
    name: 'RGB Gaming Mouse 7200 DPI',
    brand: 'ProGamer',
    price: 24.99,
    original: 39.99,
    rating: 4.5,
    reviews: 731,
    category: 'electronics',
    badge: 'HOT',
    prime: true,
    desc: 'High-precision optical gaming mouse with adjustable DPI up to 7200. 7 programmable buttons. RGB chroma lighting with 16.8M color options. Ergonomic grip for long gaming sessions.',
    features: ['7200 DPI', '7 programmable buttons', 'RGB 16.8M colors', 'Ergonomic grip'],
    stock: 93
  },
  {
    id: 9,
    emoji: '📚',
    name: 'JavaScript: The Complete Guide 2024',
    brand: 'TechBooks',
    price: 32.00,
    original: 44.99,
    rating: 4.5,
    reviews: 204,
    category: 'books',
    badge: 'NEW',
    prime: true,
    desc: 'Comprehensive guide to modern JavaScript from beginner to expert. Covers ES2024, async/await, React basics, Node.js, and real-world project building. 900+ pages with exercises.',
    features: ['900+ pages', 'ES2024 coverage', 'Real projects', 'Beginner to expert'],
    stock: 300
  },
  {
    id: 10,
    emoji: '⌚',
    name: 'Smart Fitness Watch Pro - GPS & Heart Rate',
    brand: 'FitTech',
    price: 59.99,
    original: 89.99,
    rating: 4.5,
    reviews: 553,
    category: 'electronics',
    badge: 'SALE',
    prime: true,
    desc: 'Advanced fitness smartwatch with built-in GPS, 24/7 heart rate monitoring, sleep tracking, and 50+ workout modes. 7-day battery life. IP68 waterproof. Compatible with iOS and Android.',
    features: ['Built-in GPS', '50+ workout modes', '7-day battery', 'IP68 waterproof'],
    stock: 44
  },
  {
    id: 11,
    emoji: '🎮',
    name: 'Wireless Gaming Controller - PC & Console',
    brand: 'ProGamer',
    price: 45.00,
    original: 65.00,
    rating: 4.0,
    reviews: 318,
    category: 'electronics',
    badge: 'DEAL',
    prime: true,
    desc: 'Ergonomic wireless controller compatible with PC, PS4, and Android. 20-hour battery, dual vibration motors, adjustable triggers. Plug-and-play via 2.4GHz dongle or Bluetooth.',
    features: ['20hr battery', 'Dual vibration', 'PC & console', 'Plug and play'],
    stock: 72
  },
  {
    id: 12,
    emoji: '🏋️',
    name: 'Adjustable Dumbbell Set - 5 to 25 kg',
    brand: 'IronFlex',
    price: 89.99,
    original: 120.00,
    rating: 4.5,
    reviews: 422,
    category: 'sports',
    badge: 'HOT',
    prime: true,
    desc: 'Space-saving adjustable dumbbell set replacing 9 pairs of dumbbells. Quick-select dial system adjusts weight in seconds. Non-slip grip handle. Includes storage tray.',
    features: ['5-25kg range', 'Replaces 9 pairs', 'Quick-select dial', 'Storage tray included'],
    stock: 28
  }
];

// Countries and cities for location picker
const COUNTRIES = [
  { flag: '🇵🇰', name: 'Pakistan',      cities: ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad'] },
  { flag: '🇺🇸', name: 'United States', cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'] },
  { flag: '🇬🇧', name: 'United Kingdom',cities: ['London', 'Manchester', 'Birmingham', 'Edinburgh', 'Leeds'] },
  { flag: '🇦🇪', name: 'UAE',           cities: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah'] },
  { flag: '🇸🇦', name: 'Saudi Arabia',  cities: ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dammam'] },
  { flag: '🇮🇳', name: 'India',         cities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai'] },
  { flag: '🇩🇪', name: 'Germany',       cities: ['Berlin', 'Munich', 'Hamburg', 'Frankfurt', 'Cologne'] },
  { flag: '🇨🇦', name: 'Canada',        cities: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa'] },
  { flag: '🇦🇺', name: 'Australia',     cities: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'] },
  { flag: '🇯🇵', name: 'Japan',         cities: ['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Nagoya'] },
  { flag: '🇧🇩', name: 'Bangladesh',    cities: ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna'] },
  { flag: '🇸🇬', name: 'Singapore',     cities: ['Singapore City'] },
  { flag: '🇲🇾', name: 'Malaysia',      cities: ['Kuala Lumpur', 'Penang', 'Johor Bahru', 'Kota Kinabalu'] },
  { flag: '🇳🇱', name: 'Netherlands',   cities: ['Amsterdam', 'Rotterdam', 'The Hague', 'Utrecht'] },
  { flag: '🇫🇷', name: 'France',        cities: ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice'] },
  { flag: '🇹🇷', name: 'Turkey',        cities: ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Antalya'] },
];
// ══════════════════════════════════════
// GLOBAL STATE
// ══════════════════════════════════════

const State = {
  // Auth
  user: null,           // { name, email } or null

  // Cart: array of { ...product, qty, trackingId }
  cart: [],

  // Wishlist: Set of product ids
  wishlist: new Set(),

  // Orders history: array of order objects
  orders: [],

  // Delivery location
  location: { country: '🇵🇰 Pakistan', city: 'Lahore' },

  // UI
  activeFilter:      'all',
  filteredProducts:  [...PRODUCTS],
  currentProductId:  null,
  modalQty:          1,
  heroIndex:         0,

  // Toast timer
  toastTimer: null
};

// ── Tracking ID generator ──────────────
function generateTrackingId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = 'AMZ-';
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      id += chars[Math.floor(Math.random() * chars.length)];
    }
    if (i < 2) id += '-';
  }
  return id;
}

// ── Order ID generator ─────────────────
function generateOrderId() {
  return '112-' + Math.floor(1000000 + Math.random() * 9000000) + '-' +
         Math.floor(1000000 + Math.random() * 9000000);
}

// ── Stars renderer ─────────────────────
function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return '★'.repeat(full) + (half ? '⯨' : '') + '☆'.repeat(empty);
}

// ── Savings pct ────────────────────────
function savingsPct(price, original) {
  if (!original) return null;
  return Math.round((1 - price / original) * 100);
}

// ── Badge class ────────────────────────
function badgeClass(badge) {
  const map = { NEW: 'new', DEAL: 'deal', HOT: 'hot', SALE: '' };
  return map[badge] || '';
}

// ── Estimated delivery ─────────────────
function estimatedDelivery(prime) {
  const d = new Date();
  d.setDate(d.getDate() + (prime ? 2 : 7));
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}
// ══════════════════════════════════════
// UI MODULE — Toast, Hero Slider
// ══════════════════════════════════════

// ── Toast ──────────────────────────────
function showToast(msg, icon) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent  = msg;
  document.getElementById('toastIcon').textContent = icon || '✅';
  toast.classList.add('show');
  clearTimeout(State.toastTimer);
  State.toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
}

// ── Hero Slider ────────────────────────
function initHero() {
  const slides = document.querySelectorAll('.hero-slide');
  const dotsEl = document.getElementById('heroDots');

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    dotsEl.appendChild(dot);
  });

  document.getElementById('heroPrev').addEventListener('click', () => {
    goToSlide((State.heroIndex - 1 + slides.length) % slides.length);
  });
  document.getElementById('heroNext').addEventListener('click', () => {
    goToSlide((State.heroIndex + 1) % slides.length);
  });

  // Auto advance
  setInterval(() => {
    goToSlide((State.heroIndex + 1) % slides.length);
  }, 5000);
}

function goToSlide(idx) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  slides[State.heroIndex].classList.remove('active');
  dots[State.heroIndex].classList.remove('active');
  State.heroIndex = idx;
  slides[State.heroIndex].classList.add('active');
  dots[State.heroIndex].classList.add('active');
}

// ── Greet on load ─────────────────────
function greetUser() {
  const hr = new Date().getHours();
  const [msg, icon] = hr < 12 ? ['Good Morning! ☀️', '☀️']
                    : hr < 18 ? ['Good Afternoon! 👋', '👋']
                    :           ['Good Evening! 🌙', '🌙'];
  setTimeout(() => showToast(`${msg} Welcome to Amazon Clone!`, icon), 900);
}

// ── Nav prime / service ───────────────
function initNavExtras() {
  document.getElementById('navPrime').addEventListener('click', () =>
    showToast('Amazon Prime: FREE fast delivery + streaming! 🚀', '⭐'));
  document.getElementById('navCustomerService').addEventListener('click', () =>
    showToast('Customer Service: support@amazon-clone.com 💬', '💬'));
  document.getElementById('returnsBtn').addEventListener('click', () => {
    if (!State.user) {
      showToast('Sign in to view your returns & orders', '👤');
    } else {
      openOrdersModal();
    }
  });
  document.getElementById('closeOrders').addEventListener('click', closeOrdersModal);
  document.getElementById('ordersBackdrop').addEventListener('click', (e) => {
    if (e.target === document.getElementById('ordersBackdrop')) closeOrdersModal();
  });
  document.getElementById('shopNowBtn') &&
    document.getElementById('shopNowBtn').addEventListener('click', () =>
      document.querySelector('.main').scrollIntoView({ behavior: 'smooth' }));
}
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
// ══════════════════════════════════════
// LOCATION MODULE
// ══════════════════════════════════════

function initLocation() {
  document.getElementById('deliverBtn').addEventListener('click', openLocationModal);
  document.getElementById('closeLocation').addEventListener('click', closeLocationModal);
  document.getElementById('locationBackdrop').addEventListener('click', (e) => {
    if (e.target === document.getElementById('locationBackdrop')) closeLocationModal();
  });

  document.getElementById('applyCity').addEventListener('click', applyCustomCity);
  document.getElementById('cityInput').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') applyCustomCity();
  });
  document.getElementById('changeLocBtn').addEventListener('click', resetLocationPicker);

  // Tabs
  document.querySelectorAll('.loc-tab').forEach(tab => {
    tab.addEventListener('click', () => switchLocTab(tab.dataset.tab));
  });

  buildCountryGrid();
}

function openLocationModal() {
  document.getElementById('locationBackdrop').classList.add('open');
  document.body.style.overflow = 'hidden';
  // Show current selection
  updateSelectedBar();
}

function closeLocationModal() {
  document.getElementById('locationBackdrop').classList.remove('open');
  document.body.style.overflow = '';
}

function switchLocTab(tab) {
  document.querySelectorAll('.loc-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.getElementById('tabCountry').style.display = tab === 'country' ? '' : 'none';
  document.getElementById('tabCity').style.display    = tab === 'city'    ? '' : 'none';
}

function buildCountryGrid() {
  const grid = document.getElementById('countryGrid');
  grid.innerHTML = COUNTRIES.map(c => `
    <button class="country-chip" data-country="${c.name}" data-flag="${c.flag}">
      <span>${c.flag}</span>
      <span>${c.name}</span>
    </button>`).join('');

  grid.querySelectorAll('.country-chip').forEach(chip => {
    chip.addEventListener('click', () => selectCountry(chip.dataset.flag, chip.dataset.country));
  });

  // Pre-select Pakistan
  const pak = grid.querySelector('[data-country="Pakistan"]');
  if (pak) pak.classList.add('selected');
}

function selectCountry(flag, name) {
  document.querySelectorAll('.country-chip').forEach(c => c.classList.remove('selected'));
  const chip = document.querySelector(`.country-chip[data-country="${name}"]`);
  if (chip) chip.classList.add('selected');

  // Pick first city for that country
  const countryData = COUNTRIES.find(c => c.name === name);
  const city = countryData ? countryData.cities[0] : name;

  applyLocation(`${flag} ${name}`, city);
}

function applyCustomCity() {
  const val = document.getElementById('cityInput').value.trim();
  if (!val) {
    showToast('Please enter a city or pincode', '⚠️');
    return;
  }
  applyLocation(State.location.country, val);
  document.getElementById('cityInput').value = '';
  showToast(`Delivering to ${val} ✅`, '📍');
}

function applyLocation(country, city) {
  State.location = { country, city };
  document.getElementById('deliverCity').textContent = city;
  updateSelectedBar();
  showToast(`Location set to ${city} 📍`, '📍');
}

function updateSelectedBar() {
  const bar  = document.getElementById('selectedLocationBar');
  const text = document.getElementById('selectedLocationText');
  bar.style.display = '';
  text.textContent  = `${State.location.city}, ${State.location.country}`;
}

function resetLocationPicker() {
  document.getElementById('selectedLocationBar').style.display = 'none';
  switchLocTab('country');
}
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
// ══════════════════════════════════════
// MAIN — Initialize everything on load
// ══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
  initHero();
  initAuth();
  initLocation();
  initCart();
  initProducts();
  initNavExtras();
  greetUser();
});
