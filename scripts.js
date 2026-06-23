(() => {
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelector('.nav-links');

  if (header && nav && navLinks && !nav.querySelector('.nav-menu-toggle')) {
    if (!navLinks.id) {
      navLinks.id = 'main-navigation-links';
    }

    const menuButton = document.createElement('button');
    menuButton.className = 'nav-menu-toggle';
    menuButton.type = 'button';
    menuButton.setAttribute('aria-label', 'Open menu');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-controls', navLinks.id);
    menuButton.innerHTML = '<span></span><span></span><span></span>';

    nav.insertBefore(menuButton, navLinks);

    function setMenuOpen(isOpen) {
      header.classList.toggle('nav-open', isOpen);
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    }

    menuButton.addEventListener('click', () => {
      setMenuOpen(!header.classList.contains('nav-open'));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        setMenuOpen(false);
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && header.classList.contains('nav-open')) {
        setMenuOpen(false);
        menuButton.focus();
      }
    });
  }
})();

(() => {
  const screenshots = Array.from(document.querySelectorAll('.screenshot-card img'));

  if (!screenshots.length) {
    return;
  }

  const existingModal = document.querySelector('.screenshot-modal');
  const modal = existingModal || document.createElement('div');

  if (!existingModal) {
    modal.className = 'screenshot-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Expanded screenshot');
    modal.innerHTML = `
      <div class="screenshot-modal-inner">
        <button class="screenshot-modal-close" type="button" aria-label="Close expanded screenshot">&times;</button>
        <img alt="">
      </div>
    `;
    document.body.appendChild(modal);
  } else {
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Expanded screenshot');
  }

  const modalImage = modal.querySelector('img');
  const closeButton = modal.querySelector('button');
  let lastFocusedElement = null;

  if (!modalImage || !closeButton) {
    return;
  }

  modal.hidden = true;
  closeButton.type = 'button';

  function openModal(image) {
    lastFocusedElement = document.activeElement;
    modalImage.src = image.currentSrc || image.src;
    modalImage.alt = image.alt || 'Expanded FixLog screenshot';
    modal.hidden = false;
    modal.classList.add('is-open');
    document.body.classList.add('lightbox-open');
    closeButton.focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
    modalImage.removeAttribute('src');
    modal.hidden = true;

    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  screenshots.forEach((image) => {
    image.setAttribute('tabindex', '0');
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', `${image.alt}. View larger.`);
    image.addEventListener('click', () => openModal(image));
    image.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openModal(image);
      }
    });
  });

  closeButton.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }

    if (event.key !== 'Tab' || !modal.classList.contains('is-open')) {
      return;
    }

    const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    if (!firstFocusable || !lastFocusable) {
      event.preventDefault();
      return;
    }

    if (event.shiftKey && document.activeElement === firstFocusable) {
      event.preventDefault();
      lastFocusable.focus();
    } else if (!event.shiftKey && document.activeElement === lastFocusable) {
      event.preventDefault();
      firstFocusable.focus();
    }
  });
})();
