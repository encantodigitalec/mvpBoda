(function () {
  const wedding = window.WEDDING || {};
  const couple = wedding.couple || {};
  const labels = wedding.labels || {};
  const date = wedding.date || {};
  const messages = wedding.messages || {};
  const venue = wedding.venue || {};
  const ceremony = venue.ceremony || {};
  const reception = venue.reception || {};
  const map = wedding.map || {};
  const gifts = wedding.gifts || {};
  const music = wedding.music || {};
  const images = wedding.images || {};
  const theme = window.WEDDING_THEME || {};
  const sections = window.WEDDING_SECTIONS || {};

  function setText(selector, value) {
    const text = value == null ? '' : String(value);
    document.querySelectorAll(selector).forEach((element) => { element.textContent = text; });
  }

  function setNames(element) {
    const firstName = couple.firstName || 'Nombre';
    const secondName = couple.secondName || 'Nombre';
    element.replaceChildren(document.createTextNode(firstName));
    const separator = document.createElement('span');
    separator.className = 'ampersand';
    separator.textContent = '&';
    element.append(separator, document.createTextNode(` ${secondName}`));
  }

  function setElementText(element, value) {
    if (element) element.textContent = value == null ? '' : String(value);
  }

  const firstName = couple.firstName || 'Nombre';
  const secondName = couple.secondName || 'Nombre';
  document.title = `Invitaci\u00f3n de Boda | ${firstName} & ${secondName}`;
  setText('.opening-label span:last-child', labels.openingInvitation || 'invitaci\u00f3n especial');
  setText('.letter-subtitle', labels.letterSubtitle || 'Nuestra boda');
  setText('.envelope-text', labels.openInvitation || 'Ver invitaci\u00f3n');
  setText('.opening-help', labels.openingHelp || 'Toca el sobre para abrir tu invitaci\u00f3n.');
  setText('.wax-seal', '\u2665');
  setText('.badge', messages.badge ? `\u00a1${messages.badge}!` : '');
  setText('.small-title', labels.invitationTitle || 'Invitaci\u00f3n de boda');
  const openButton = document.getElementById('openInvitation');
  if (openButton) openButton.setAttribute('aria-label', `Ver invitaci\u00f3n de boda de ${firstName} y ${secondName}`);
  const initials = document.querySelector('.initials');
  if (initials) {
    const ampersand = document.createElement('small');
    ampersand.textContent = '&';
    initials.replaceChildren(document.createTextNode(firstName[0]));
    initials.append(' ', ampersand, ` ${secondName[0]}`);
  }
  const musicButton = document.getElementById('musicButton');
  if (musicButton) {
    musicButton.textContent = '||';
    musicButton.setAttribute('aria-label', 'Pausar o reproducir m\u00fasica');
  }

  document.querySelectorAll('.hero h1, .final-names').forEach(setNames);
  setText('.date-row', date.weekday);
  setText('.date-main', date.display);
  const dateCard = document.querySelector('.date-card');
  if (dateCard) dateCard.hidden = !date.weekday && !date.display;
  setText('.quote', messages.quote ? `\u201c${messages.quote}\u201d` : '');
  setText('.photo-section[data-section="story"] .photo-message p', messages.story);
  setText('[data-section="memory"] .photo-message p', messages.memory);
  setText('[data-section="story"] .photo-message h2', messages.storyTitle);
  setText('[data-section="memory"] .photo-message h2', messages.memoryTitle);
  setText('[data-section="closingImage"] .photo-message h2', messages.closingTitle);
  setText('.countdown-section h2', messages.countdownTitle);
  setText('.final-highlight', messages.finalHighlight);
  setText('[data-section="dressCode"] h2', labels.dressCode || 'C\u00f3digo de vestimenta');
  setText('[data-section="rsvp"] h2', labels.rsvp || 'Confirma tu asistencia');
  setText('.event-details-section > p:not(.event-intro)', messages.eventStory);
  setText('.event-intro', messages.introduction);

  const eventCards = document.querySelectorAll('.event-large-card');
  if (eventCards[0]) {
    setElementText(eventCards[0].querySelector('h3'), date.shortDisplay);
    setElementText(eventCards[0].querySelector('.event-label'), labels.date || 'Fecha');
    eventCards[0].hidden = !date.shortDisplay;
  }
  if (eventCards[1]) {
    setElementText(eventCards[1].querySelector('.event-label'), labels.ceremony || 'Ceremonia religiosa');
    setElementText(eventCards[1].querySelector('h3'), ceremony.name);
    const ceremonyTime = eventCards[1].querySelector('p:not(.event-label)');
    setElementText(ceremonyTime, ceremony.time ? `Hora: ${ceremony.time}` : '');
    eventCards[1].hidden = !ceremony.name;
  }
  if (eventCards[2]) {
    setElementText(eventCards[2].querySelector('.event-label'), labels.reception || 'Recepci\u00f3n');
    const content = eventCards[2].querySelector('.event-large-content');
    setElementText(content.querySelector('h3'), reception.name);
    const paragraphs = content.querySelectorAll('p:not(.event-label)');
    setElementText(paragraphs[0], reception.address);
    setElementText(paragraphs[1], reception.time ? `Hora: ${reception.time}` : '');
    eventCards[2].hidden = !reception.name;
  }

  setText('[data-section="dressCode"] > p', messages.dressCode);
  setText('[data-section="gifts"] > p', messages.gifts);
  const bankRows = document.querySelectorAll('.bank-row span');
  const giftValues = [gifts.bank, gifts.accountHolder, gifts.account];
  bankRows.forEach((row, index) => {
    setElementText(row, giftValues[index]);
    if (row) row.closest('.bank-row').hidden = !giftValues[index];
  });
  const giftsSection = document.querySelector('[data-section="gifts"]');
  if (giftsSection) giftsSection.hidden = !messages.gifts && !giftValues.some(Boolean);
  setText('[data-section="rsvp"] > p', messages.rsvpDeadline
    ? `Por favor confirma tu asistencia antes del ${messages.rsvpDeadline}. Tu presencia har\u00e1 este d\u00eda a\u00fan m\u00e1s especial.`
    : '');
  setText('[data-section="closing"] > p:not(.final-highlight)', messages.closing);

  const photos = document.querySelectorAll('.photo-section img');
  [images.story, images.memory, images.closing].forEach((src, index) => {
    if (!photos[index]) return;
    if (src) photos[index].src = src;
    else photos[index].closest('.photo-section').hidden = true;
    photos[index].addEventListener('error', () => {
      photos[index].closest('.photo-section').hidden = true;
    }, { once: true });
  });
  const brand = document.querySelector('.template-brand img');
  if (brand && images.brand) {
    brand.src = images.brand;
    brand.addEventListener('error', () => { brand.hidden = true; }, { once: true });
  }
  else if (brand) brand.hidden = true;
  const audioSource = document.querySelector('#weddingAudio source');
  const audio = document.getElementById('weddingAudio');
  if (audioSource && audio && music.source) {
    audioSource.src = music.source;
  } else {
    audioSource?.removeAttribute('src');
    audio?.load();
    if (musicButton) musicButton.hidden = true;
  }
  const mapButton = document.getElementById('openMapModal');
  const hasMapCoordinates = Number.isFinite(map.latitude) && Number.isFinite(map.longitude);
  if (mapButton) {
    mapButton.hidden = !hasMapCoordinates;
    if (hasMapCoordinates) {
      mapButton.textContent = map.addressText ? `${labels.map || 'Ver ubicaci\u00f3n'} \u00b7 ${map.addressText}` : (labels.map || 'Ver ubicaci\u00f3n');
    }
  }
  setText('#openGoogleMaps', labels.mapsOpen || 'Abrir en Google Maps');
  setText('#calendarLink', labels.calendar || 'Agregar fecha al calendario');
  setText('#whatsappLink', labels.whatsapp || 'Confirmar por WhatsApp');

  if (theme.colors || theme.fonts) {
    const colors = theme.colors || {};
    const fonts = theme.fonts || {};
    const root = document.documentElement.style;
    const colorVariables = {
      '--color-fondo': colors.fondo,
      '--color-fondo-2': colors.fondo2,
      '--color-principal': colors.principal,
      '--color-secundario': colors.secundario,
      '--color-acento': colors.acento,
      '--color-texto': colors.texto,
      '--color-blanco': colors.blanco,
      '--boton-sobre-fondo': colors.principal,
      '--boton-sobre-fondo-2': colors.secundario,
      '--boton-general-fondo': colors.principal,
      '--boton-general-fondo-2': colors.secundario,
      '--boton-general-hover': colors.principal,
      '--boton-secundario-texto': colors.principal
    };
    Object.entries(colorVariables).forEach(([name, value]) => {
      if (value) root.setProperty(name, value);
    });
    if (fonts.heading) root.setProperty('--font-heading', `"${fonts.heading}"`);
    if (fonts.body) root.setProperty('--font-body', `"${fonts.body}"`);
  }

  document.querySelectorAll('[data-section]').forEach((section) => {
    if (sections[section.dataset.section] === false) section.hidden = true;
  });
})();
