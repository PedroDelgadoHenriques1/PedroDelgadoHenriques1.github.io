/* Portfolio — interactions */

/* Scroll progress + back-to-top */
const bar = document.getElementById('scroll-bar');
const backTop = document.getElementById('back-top');
window.addEventListener('scroll', () => {
  const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
  bar.style.width = pct + '%';
  backTop.classList.toggle('show', window.scrollY > 400);
}, { passive: true });

/* Reveal on scroll */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* Mobile menu */
const ham = document.getElementById('ham');
const mob = document.getElementById('mobile-menu');
ham.addEventListener('click', () => {
  ham.classList.toggle('open');
  mob.classList.toggle('open');
});
window.closeMobile = function() {
  ham.classList.remove('open');
  mob.classList.remove('open');
};

/* Active nav link */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const navIO = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => l.style.color = '');
      const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (active) active.style.color = 'var(--text)';
    }
  });
}, { threshold: 0.35 });
sections.forEach(s => navIO.observe(s));
