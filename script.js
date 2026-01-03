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

// Responsive nav toggle behaviour
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
const navOverlay = document.getElementById('navOverlay');
const mainNavList = document.getElementById('mainNavList');

function openNav() {
  if (!mainNav) return;
  mainNav.classList.add('open');
  navToggle.setAttribute('aria-expanded', 'true');
  if (navOverlay) navOverlay.classList.add('visible');
  if (navOverlay) navOverlay.setAttribute('aria-hidden', 'false');
  // swap icon
  navToggle.innerHTML = '<i class="fas fa-times"></i>';
  // focus first link
  const firstLink = mainNavList?.querySelector('a');
  if (firstLink) firstLink.focus();
}

function closeNav() {
  if (!mainNav) return;
  mainNav.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  if (navOverlay) navOverlay.classList.remove('visible');
  if (navOverlay) navOverlay.setAttribute('aria-hidden', 'true');
  navToggle.innerHTML = '<i class="fas fa-bars"></i>';
  navToggle.focus();
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

document.querySelectorAll('.pitch-instance').forEach(instance => {
  const tpl = document.getElementById('pitch-template');
  if (!tpl) return;

  const clone = tpl.content.cloneNode(true);
  const positionsGroup = clone.querySelector('.pitch-positions');

  const positions = (instance.dataset.positions || '')
    .split(',')
    .map(p => p.trim());

  const coords = {
    LW: { x: 22, y: 80 },
    RW: { x: 135, y: 80 },
    CAM: { x: 85, y: 100 },
    ST: { x: 85, y: 45 }
  };

  positions.forEach(pos => {
    if (!coords[pos]) return;

    const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    t.setAttribute('x', coords[pos].x);
    t.setAttribute('y', coords[pos].y);
    t.setAttribute('class', 'pitch-label');
    t.textContent = pos;
    positionsGroup.appendChild(t);
  });

  instance.appendChild(clone);
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
      reset: true 
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
    const text = typewriterElement.getAttribute('data-typewriter');
    typewriterElement.textContent = '';
    
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    
    let charIndex = 0;
    const speed = 50; // milliseconds per character
    const startDelay = 1000; // delay before typing starts

    setTimeout(() => {
      function typeChar() {
        if (charIndex < text.length) {
          typewriterElement.textContent = text.substring(0, charIndex + 1);
          typewriterElement.appendChild(cursor);
          charIndex++;
          setTimeout(typeChar, speed);
        }
      }
      typeChar();
    }, startDelay);
  }
});



