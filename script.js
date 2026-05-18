// Dropdown menü — click ile aç/kapat
document.querySelectorAll('.dropdown > a').forEach(function(trigger) {
  trigger.addEventListener('click', function(e) {
    var dropdown = this.closest('.dropdown');
    var isOpen = dropdown.classList.contains('open');
    document.querySelectorAll('.dropdown.open').forEach(function(d) { d.classList.remove('open'); });
    if (!isOpen) {
      e.preventDefault();
      dropdown.classList.add('open');
    }
  });
});
document.addEventListener('click', function(e) {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown.open').forEach(function(d) { d.classList.remove('open'); });
  }
});

// Hamburger menü
document.getElementById('hamburger').addEventListener('click', function() {
  document.getElementById('mobileMenu').classList.toggle('open');
});
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('open');
  });
});

// Navbar scroll shadow
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) nav.style.boxShadow = window.scrollY > 50 ? '0 4px 30px rgba(0,0,0,0.5)' : 'none';
});

// Countdown — 27 Mart 2026 saat 09:00
function updateCountdown() {
  const days    = document.getElementById('cd-days');
  const hours   = document.getElementById('cd-hours');
  const minutes = document.getElementById('cd-minutes');
  const seconds = document.getElementById('cd-seconds');
  if (!days) return;

  // Ay 0'dan başlar: 0=Ocak, 2=Mart
  const target = new Date(2026, 5, 19, 0, 0, 0);
  const now    = new Date();
  const diff   = target.getTime() - now.getTime();

  if (diff <= 0) {
    days.textContent = hours.textContent = minutes.textContent = seconds.textContent = '00';
    return;
  }

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  days.textContent    = String(d).padStart(2, '0');
  hours.textContent   = String(h).padStart(2, '0');
  minutes.textContent = String(m).padStart(2, '0');
  seconds.textContent = String(s).padStart(2, '0');
}

// Sayfa yüklenince hemen çalıştır
window.addEventListener('DOMContentLoaded', function() {
  updateCountdown();
  setInterval(updateCountdown, 1000);
});
