(function () {
  const config = window.WEDDING?.map || {};
  const openButton = document.getElementById('openMapModal');
  const closeButton = document.getElementById('closeMapModal');
  const modal = document.getElementById('mapModal');
  const iframe = document.getElementById('mapIframe');
  const mapsLink = document.getElementById('openGoogleMaps');
  const validCoordinates = Number.isFinite(config.latitude) && Number.isFinite(config.longitude);
  if (!modal || !iframe || !mapsLink || !validCoordinates) {
    if (openButton) openButton.hidden = true;
    return;
  }
  let previousFocus;
  function show() {
    previousFocus = document.activeElement;
    const coordinates = `${config.latitude},${config.longitude}`;
    iframe.src = `https://maps.google.com/maps?q=${coordinates}&z=${config.zoom}&output=embed`;
    mapsLink.href = `https://www.google.com/maps/search/?api=1&query=${coordinates}`;
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeButton?.focus();
  }
  function hide() {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    previousFocus?.focus();
  }
  if (openButton) openButton.addEventListener('click', show);
  if (closeButton) closeButton.addEventListener('click', hide);
  modal.addEventListener('click', (event) => { if (event.target === modal) hide(); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') hide(); });
  modal.addEventListener('keydown', (event) => {
    if (event.key !== 'Tab') return;
    const focusable = [...modal.querySelectorAll('button:not([disabled]), a[href], iframe, [tabindex]:not([tabindex="-1"])')];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });
})();
