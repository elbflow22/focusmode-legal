// Focus Mode One — Legal Pages
// Minimal scroll-spy for the table of contents

(function () {
  'use strict';

  const tocLinks = document.querySelectorAll('.toc__list a');
  if (!tocLinks.length) return;

  const sections = Array.from(tocLinks)
    .map((link) => {
      const id = link.getAttribute('href')?.slice(1);
      return id ? document.getElementById(id) : null;
    })
    .filter(Boolean);

  if (!sections.length) return;

  const setActive = (id) => {
    tocLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('is-active', isActive);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible.length > 0) {
        setActive(visible[0].target.id);
      }
    },
    {
      rootMargin: '-100px 0px -60% 0px',
      threshold: 0,
    }
  );

  sections.forEach((section) => observer.observe(section));

  // Smooth scroll enhancement — also closes mobile <details> on click
  tocLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const details = link.closest('details');
      if (details && window.innerWidth < 960) {
        details.open = false;
      }
    });
  });
})();
