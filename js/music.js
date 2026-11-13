(function () {
  const config = window.WEDDING?.music || {};
  const labels = window.WEDDING?.labels || {};
  const audio = document.getElementById('weddingAudio');
  const button = document.getElementById('musicButton');
  if (!audio || !config.source) {
    if (button) button.hidden = true;
    return;
  }
  const volume = Number(config.volume);
  audio.volume = Number.isFinite(volume) ? Math.min(1, Math.max(0, volume)) : 0.4;
  audio.loop = config.loop !== false;
  if (button) {
    button.textContent = '▶';
    button.setAttribute('aria-label', labels.musicPlay || 'Reproducir música');
  }
  function play() {
    audio.play().then(() => {
      if (button) {
        button.classList.remove('is-paused');
        button.textContent = 'Ⅱ';
        button.setAttribute('aria-label', labels.musicPause || 'Pausar música');
      }
    }).catch(() => {
      if (button) {
        button.classList.add('is-paused');
        button.textContent = '▶';
        button.setAttribute('aria-label', labels.musicPlay || 'Reproducir música');
      }
    });
  }
  function toggle() {
    if (audio.paused) {
      play();
    } else {
      audio.pause();
      if (button) {
        button.classList.add('is-paused');
        button.textContent = '▶';
        button.setAttribute('aria-label', labels.musicPlay || 'Reproducir música');
      }
    }
  }
  audio.addEventListener('error', () => {
    if (!button) return;
    button.disabled = true;
    button.textContent = '×';
    button.setAttribute('aria-label', 'Música no disponible');
    button.title = 'No se pudo cargar el archivo de música.';
  });
  if (button) button.addEventListener('click', toggle);
  window.WeddingMusic = { play, toggle };
})();
