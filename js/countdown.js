(function () {
  const configuredDate = window.WEDDING?.date?.iso;
  const date = configuredDate ? new Date(configuredDate).getTime() : Number.NaN;
  const section = document.querySelector('.countdown-section');
  const heading = section?.querySelector('h2');
  const message = section?.querySelector('p');
  const countdown = document.getElementById('countdown');
  if (!Number.isFinite(date)) {
    if (countdown) countdown.hidden = true;
    if (message) message.textContent = 'La fecha del evento aún no está configurada.';
    return;
  }

  if (date <= Date.now()) {
    if (countdown) countdown.hidden = true;
    if (heading) heading.textContent = 'El evento ya se celebró';
    if (message) message.textContent = 'Gracias por formar parte de este recuerdo.';
    return;
  }

  const fields = {
    days: document.getElementById('days'), hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'), seconds: document.getElementById('seconds')
  };
  if (!fields.days || !fields.hours || !fields.minutes || !fields.seconds) return;
  function update() {
    const distance = date - Date.now();
    fields.days.textContent = String(Math.floor(distance / 86400000)).padStart(2, '0');
    fields.hours.textContent = String(Math.floor((distance % 86400000) / 3600000)).padStart(2, '0');
    fields.minutes.textContent = String(Math.floor((distance % 3600000) / 60000)).padStart(2, '0');
    fields.seconds.textContent = String(Math.floor((distance % 60000) / 1000)).padStart(2, '0');
  }
  update();
  window.setInterval(update, 1000);
})();
