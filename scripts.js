(() => {
  const screenshots = Array.from(document.querySelectorAll('.screenshot-card img'));

  if (!screenshots.length) {
    return;
  }

  const modal = document.createElement('div');
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

  const modalImage = modal.querySelector('img');
  const closeButton = modal.querySelector('button');

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
