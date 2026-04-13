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
