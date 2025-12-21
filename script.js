const toggle = document.getElementById('themeToggle');
const DARK_CLASS = 'dark';

function setDarkMode(isDark) {
  if (!toggle) return;
  if (isDark) document.body.classList.add(DARK_CLASS);
  else document.body.classList.remove(DARK_CLASS);

  // update button icon
  toggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

  // persist
  try { localStorage.setItem('darkMode', isDark ? '1' : '0'); } catch (e) {}
}

if (toggle) {
  toggle.addEventListener('click', () => {
    setDarkMode(!document.body.classList.contains(DARK_CLASS));
  });

  // initial state: saved preference or system preference
  let saved = null;
  try { saved = localStorage.getItem('darkMode'); } catch (e) {}
  if (saved === '1') setDarkMode(true);
  else if (saved === '0') setDarkMode(false);
  else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setDarkMode(true);
}

// Add 'loaded' class to hero when page finishes loading
window.addEventListener('load', () => {
  document.querySelector('.hero')?.classList.add('loaded');
});


