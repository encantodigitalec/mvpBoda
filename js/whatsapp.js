(function () {
  const link = document.getElementById('whatsappLink');
  if (!link) return;
  const wedding = window.WEDDING || {};
  const labels = wedding.labels || {};
  const phone = String(wedding.rsvp?.whatsappPhone || '').replace(/\D/g, '');
  if (!/^\d{8,15}$/.test(phone)) {
    link.hidden = true;
    const section = link.closest('[data-section="rsvp"]');
    if (section) section.hidden = true;
    return;
  }
  const firstName = wedding.couple?.firstName || 'Nombre';
  const secondName = wedding.couple?.secondName || 'Nombre';
  const names = `${firstName} y ${secondName}`;
  const message = `Hola, confirmo mi asistencia a la boda de ${names}. Mi nombre es:`;
  link.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  link.textContent = labels.whatsapp || 'Confirmar por WhatsApp';
})();
