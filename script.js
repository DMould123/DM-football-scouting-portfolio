const toggle = document.getElementById('themeToggle');
const DARK_CLASS = 'dark';

function setDarkMode(isDark) {
  if (isDark) document.body.classList.add(DARK_CLASS);
  else document.body.classList.remove(DARK_CLASS);

  // update button icon
  if (toggle) {
    toggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  }

  // persist
  try { localStorage.setItem('darkMode', isDark ? '1' : '0'); } catch (e) {}
}

if (toggle) {
  toggle.addEventListener('click', () => {
    setDarkMode(!document.body.classList.contains(DARK_CLASS));
  });
}

// initial state: saved preference or system preference
let saved = null;
try { saved = localStorage.getItem('darkMode'); } catch (e) {}
if (saved === '1') setDarkMode(true);
else if (saved === '0') setDarkMode(false);
else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) setDarkMode(true);

// Add 'loaded' class to hero when page finishes loading
window.addEventListener('load', () => {
  document.querySelector('.hero')?.classList.add('loaded');
});

// Responsive nav toggle behaviour
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
const navOverlay = document.getElementById('navOverlay');
const mainNavList = document.getElementById('mainNavList');

function openNav() {
  if (!mainNav) return;
  mainNav.classList.add('open');
  if (navToggle) navToggle.setAttribute('aria-expanded', 'true');
  if (navOverlay) navOverlay.classList.add('visible');
  if (navOverlay) navOverlay.setAttribute('aria-hidden', 'false');
  // swap icon
  if (navToggle) navToggle.innerHTML = '<i class="fas fa-times"></i>';
  // focus first link
  const firstLink = mainNavList?.querySelector('a');
  if (firstLink) firstLink.focus();
}

function closeNav() {
  if (!mainNav) return;
  mainNav.classList.remove('open');
  if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  if (navOverlay) navOverlay.classList.remove('visible');
  if (navOverlay) navOverlay.setAttribute('aria-hidden', 'true');
  if (navToggle) navToggle.innerHTML = '<i class="fas fa-bars"></i>';
  if (navToggle) navToggle.focus();
}

if (navToggle) {
  navToggle.addEventListener('click', () => {
    if (mainNav?.classList.contains('open')) closeNav();
    else openNav();
  });
}

// Close when clicking overlay
if (navOverlay) {
  navOverlay.addEventListener('click', () => closeNav());
}

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeNav();
});

// Close nav when a link is clicked (mobile)
document.querySelectorAll('#mainNavList a').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth <= 980) closeNav();
  });
});

// ScrollReveal initialization - runs when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 800,
      delay: 100,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      opacity: 0,
      scale: 0.95,
      reset: false
    });

    // Reveal league cards with staggered timing
    sr.reveal('.league-card', { interval: 100 });

    // Reveal report sections
    sr.reveal('.report-section', { distance: '30px', delay: 50 });

    // Reveal video sections
    sr.reveal('.video-section', { distance: '40px' });

    // Reveal contact links
    sr.reveal('.contact-links', { distance: '30px' });

    // Reveal section titles
    sr.reveal('.section > .container > h2', { distance: '20px', delay: 50 });
  }

  // Typewriter effect for hero mission
  const typewriterElement = document.querySelector('.typewriter-animation');
  if (typewriterElement) {
    const text = typewriterElement.getAttribute('data-typewriter') || '';
    if (!text) return;
    typewriterElement.textContent = '';
    
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    
    const speed = 40; // milliseconds per character
    const startDelay = 1000; // delay before typing starts
    const pauseAfterComplete = 10000; // pause after typing completes before restarting

    function startTypewriter() {
      let charIndex = 0;
      typewriterElement.textContent = '';
      
      function typeChar() {
        if (charIndex < text.length) {
          typewriterElement.textContent = text.substring(0, charIndex + 1);
          typewriterElement.appendChild(cursor);
          charIndex++;
          setTimeout(typeChar, speed);
        } else {
          // Typing complete, wait then restart
          setTimeout(() => {
            startTypewriter();
          }, pauseAfterComplete);
        }
      }
      
      setTimeout(typeChar, startDelay);
    }
    
    startTypewriter();
  }
});



