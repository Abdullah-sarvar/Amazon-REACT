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
