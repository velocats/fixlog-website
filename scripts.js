(() => {
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.nav');
  const navLinks = document.querySelector('.nav-links');

  if (header && nav && navLinks && !nav.querySelector('.nav-menu-toggle')) {
    const menuButton = document.createElement('button');
    menuButton.className = 'nav-menu-toggle';
    menuButton.type = 'button';
    menuButton.setAttribute('aria-label', 'Open menu');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.innerHTML = '<span></span><span></span><span></span>';

    nav.insertBefore(menuButton, navLinks);

    menuButton.addEventListener('click', () => {
      const isOpen = header.classList.toggle('nav-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        header.classList.remove('nav-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open menu');
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && header.classList.contains('nav-open')) {
        header.classList.remove('nav-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open menu');
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

  if (!modalImage || !closeButton) {
    return;
  }

  function openModal(image) {
    modalImage.src = image.currentSrc || image.src;
    modalImage.alt = image.alt || 'Expanded FixLog screenshot';
    modal.classList.add('is-open');
    document.body.classList.add('lightbox-open');
    closeButton.focus();
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.classList.remove('lightbox-open');
    modalImage.removeAttribute('src');
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
  });
})();
