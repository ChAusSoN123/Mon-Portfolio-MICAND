console.log("Script chargé !");

// Sélecteurs sûrs (vérifier la présence avant d'ajouter des listeners)
const titrePrincipal = document.querySelector('#main-title');
const monBouton = document.querySelector('#mon-bouton');
if (monBouton && titrePrincipal) {
  monBouton.addEventListener('click', () => {
    titrePrincipal.textContent = "Nouveau Titre !";
  });
}

// Toggle thème sombre
const themeButton = document.querySelector('#themeButton');
if (themeButton) {
  // init label
  themeButton.textContent = document.body.classList.contains('dark-mode') ? 'Mode Clair' : 'Mode Sombre';

  themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeButton.textContent = document.body.classList.contains('dark-mode') ? 'Mode Clair' : 'Mode Sombre';
  });
}

// Nav links smooth scroll (utilise CSS scroll-behavior mais on garde une fallback)
const navLinks = document.querySelectorAll('nav a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;

    // prevent default to ensure consistent behavior
    e.preventDefault();
    // scroll into view; sections have scroll-margin-top set in CSS to offset sticky header
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // update hash without jumping
    history.replaceState(null, '', href);
  });
});

// Highlight active nav link on scroll using IntersectionObserver
const sections = document.querySelectorAll('main section[id]');
const observerOptions = { root: null, rootMargin: '0px 0px -40% 0px', threshold: 0 };
const navMap = {};
navLinks.forEach(a => { const h = a.getAttribute('href'); if (h && h.startsWith('#')) navMap[h.slice(1)] = a; });

function setActive(id){
  navLinks.forEach(a => a.classList.remove('active'));
  if (navMap[id]) navMap[id].classList.add('active');
}

if (sections.length && window.IntersectionObserver) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActive(entry.target.id);
      }
    });
  }, observerOptions);
  sections.forEach(s => io.observe(s));
  // set initial active based on scroll position
  window.addEventListener('load', () => {
    sections.forEach(s => {
      const rect = s.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.3 && rect.bottom >= window.innerHeight * 0.3) setActive(s.id);
    });
  });
}

// small helper: close mobile nav or other UX additions could go here