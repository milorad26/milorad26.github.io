(function () {
  'use strict';

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  toggle.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Active nav link while scrolling
  var sections = Array.prototype.slice.call(document.querySelectorAll('main section[id]'));
  var navAnchors = Array.prototype.slice.call(links.querySelectorAll('a[href^="#"]'));
  function setActive() {
    var pos = window.scrollY + 120;
    var current = sections[0].id;
    sections.forEach(function (s) { if (s.offsetTop <= pos) current = s.id; });
    navAnchors.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  // Back-to-top button
  var toTop = document.getElementById('toTop');
  toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  function toggleToTop() { toTop.classList.toggle('show', window.scrollY > 500); }

  window.addEventListener('scroll', function () { setActive(); toggleToTop(); }, { passive: true });
  setActive();
  toggleToTop();

  // Reveal-on-scroll
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }
})();
