(function () {
  const photos = document.querySelectorAll('.photo-section');
  if (photos.length && !('IntersectionObserver' in window)) {
    photos.forEach((photo) => photo.classList.add('show'));
  } else if (photos.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    photos.forEach((photo) => observer.observe(photo));
  }

  const viewer = document.getElementById('imageViewer');
  const viewerPhoto = document.getElementById('imageViewerPhoto');
  const caption = document.getElementById('imageViewerCaption');
  const closeButton = document.getElementById('closeImageViewer');
  const previousButton = document.getElementById('previousImage');
  const nextButton = document.getElementById('nextImage');
  const images = [...document.querySelectorAll('.photo-card img')]
    .filter((image) => !image.hidden && image.getAttribute('src'));
  if (!viewer || !viewerPhoto || !caption || !images.length) return;

  let activeIndex = 0;
  let lastFocus = null;
  let touchStartX = null;

  function showImage(index) {
    activeIndex = (index + images.length) % images.length;
    const activeImage = images[activeIndex];
    viewerPhoto.src = activeImage.currentSrc || activeImage.src;
    viewerPhoto.alt = activeImage.alt || 'Fotografía de la invitación';
    caption.textContent = `${viewerPhoto.alt} · ${activeIndex + 1} de ${images.length}`;
    previousButton.hidden = images.length < 2;
    nextButton.hidden = images.length < 2;
  }

  function openViewer(image) {
    activeIndex = images.indexOf(image);
    if (activeIndex < 0) return;
    lastFocus = image;
    showImage(activeIndex);
    if (typeof viewer.showModal === 'function') viewer.showModal();
    else viewer.setAttribute('open', '');
    closeButton?.focus();
  }

  function closeViewer() {
    if (typeof viewer.close === 'function' && viewer.open) viewer.close();
    else viewer.removeAttribute('open');
    lastFocus?.focus();
  }

  images.forEach((image, index) => {
    image.tabIndex = 0;
    image.setAttribute('role', 'button');
    image.setAttribute('aria-label', `Ampliar fotografía ${index + 1}: ${image.alt || 'invitación'}`);
    image.draggable = false;
    image.addEventListener('click', () => openViewer(image));
    image.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openViewer(image);
    });
  });

  closeButton?.addEventListener('click', closeViewer);
  previousButton?.addEventListener('click', () => showImage(activeIndex - 1));
  nextButton?.addEventListener('click', () => showImage(activeIndex + 1));
  viewer.addEventListener('click', (event) => {
    if (event.target === viewer) closeViewer();
  });
  viewer.addEventListener('close', () => lastFocus?.focus());
  viewer.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  viewer.addEventListener('touchend', (event) => {
    if (touchStartX === null) return;
    const difference = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(difference) > 48) showImage(activeIndex + (difference < 0 ? 1 : -1));
    touchStartX = null;
  }, { passive: true });
  document.addEventListener('keydown', (event) => {
    if (!viewer.open) return;
    if (event.key === 'ArrowRight') showImage(activeIndex + 1);
    if (event.key === 'ArrowLeft') showImage(activeIndex - 1);
  });
})();
