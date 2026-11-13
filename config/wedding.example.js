/*
 * Ejemplo ficticio para consultar la estructura de config/wedding.js.
 * No se carga desde index.html y sus valores deben reemplazarse antes de publicar.
 */
window.WEDDING = {
  couple: { firstName: 'Alex Ejemplo', secondName: 'Sam Prueba' },
  labels: {
    openingInvitation: 'invitación especial',
    letterSubtitle: 'Nuestra boda',
    openInvitation: 'Ver invitación',
    openingHelp: 'Toca el sobre para abrir tu invitación.',
    invitationTitle: 'Invitación de boda',
    date: 'Fecha',
    ceremony: 'Ceremonia',
    reception: 'Recepción',
    dressCode: 'Código de vestimenta',
    rsvp: 'Confirma tu asistencia',
    map: 'Ver ubicación',
    mapsOpen: 'Abrir en Google Maps',
    calendar: 'Agregar fecha al calendario',
    whatsapp: 'Confirmar por WhatsApp',
    musicPlay: 'Reproducir música',
    musicPause: 'Pausar música'
  },
  date: {
    iso: '2030-06-15T16:00:00-05:00',
    weekday: 'Sábado',
    display: '15 de junio de 2030',
    shortDisplay: '15 junio 2030'
  },
  messages: {
    badge: 'Nos casamos',
    quote: 'Queremos compartir este día especial contigo.',
    storyTitle: 'Nuestra historia',
    story: 'Una historia ficticia para mostrar dónde editar este texto.',
    memory: 'Un mensaje de ejemplo para acompañar una fotografía.',
    introduction: 'Te invitamos a celebrar con nosotros.',
    eventStory: 'Texto de ejemplo sobre la historia de la pareja.',
    dressCode: 'Código de vestimenta opcional.',
    gifts: 'Información de regalos opcional.',
    rsvpDeadline: '1 de junio de 2030',
    closing: 'Gracias por compartir este día con nosotros.',
    memoryTitle: 'Un día para recordar',
    closingTitle: 'Gracias por acompañarnos',
    finalHighlight: '¡Te esperamos!',
    countdownTitle: '¡Se acerca el gran día!'
  },
  venue: {
    ceremony: { name: 'Lugar de ceremonia de ejemplo', time: '16:00' },
    reception: {
      name: 'Recepción de ejemplo',
      time: '18:00',
      address: 'Dirección ficticia, ciudad'
    }
  },
  map: { latitude: null, longitude: null, zoom: 15, addressText: '' },
  rsvp: { whatsappPhone: '' },
  gifts: { bank: '', accountHolder: '', account: '' },
  music: { source: '', volume: 0.4, loop: true },
  images: {
    story: 'assets/images/nuestrahistoria.webp',
    memory: 'assets/images/undiapararecordar.webp',
    closing: 'assets/images/final.webp',
    brand: 'assets/images/logoencanto.png'
  }
};
