(function () {
  const link = document.getElementById('calendarLink');
  if (!link) return;
  const wedding = window.WEDDING || {};
  const startDate = new Date(wedding.date?.iso || Number.NaN);
  if (!Number.isFinite(startDate.getTime())) {
    link.hidden = true;
    return;
  }
  const endDate = new Date(startDate.getTime() + 4 * 60 * 60 * 1000);
  const format = (date) => date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `Boda de ${wedding.couple?.firstName || 'Nombre'} y ${wedding.couple?.secondName || 'Nombre'}`,
    dates: `${format(startDate)}/${format(endDate)}`,
    location: [wedding.venue?.reception?.name, wedding.venue?.reception?.address].filter(Boolean).join(', ')
  });
  link.href = `https://calendar.google.com/calendar/render?${params.toString()}`;
})();
