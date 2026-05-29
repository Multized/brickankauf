/* =====================================================
   BrickBack.de — Haupt-JavaScript
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ----- Mobile Navigation Toggle ----- */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navLinks.classList.remove('open'))
    );
  }

  /* ----- FAQ Accordion ----- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      // Open clicked (if was closed)
      if (!isOpen) item.classList.add('open');
    });
    // Keyboard accessibility
    question.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); question.click(); }
    });
    question.setAttribute('tabindex', '0');
    question.setAttribute('role', 'button');
  });

  /* ----- Scroll Reveal ----- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* ----- Contact Form Handling (Formspree) ----- */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      const successMsg = document.getElementById('form-success');

      btn.disabled = true;
      btn.textContent = 'Wird gesendet…';

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          form.reset();
          if (successMsg) {
            successMsg.style.display = 'flex';
            successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          btn.textContent = 'Gesendet ✓';
        } else {
          btn.disabled = false;
          btn.textContent = 'Jetzt Anfrage senden';
          alert('Ein Fehler ist aufgetreten. Bitte versuche es erneut oder schreib uns direkt per E-Mail.');
        }
      } catch {
        btn.disabled = false;
        btn.textContent = 'Jetzt Anfrage senden';
        alert('Keine Internetverbindung. Bitte versuche es später erneut.');
      }
    });
  }

  /* ----- Smooth scroll for anchor links ----- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // nav height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
