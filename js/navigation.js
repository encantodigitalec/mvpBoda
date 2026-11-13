(function () {
  const openingScreen = document.getElementById('openingScreen');
  const openButton = document.getElementById('openInvitation');
  const invitation = document.getElementById('invitationWrapper');
  const content = document.querySelector('.content');
  if (!openingScreen || !openButton || !invitation) return;
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  function resetScroll() {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    if (content) content.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }
  window.addEventListener('load', resetScroll);
  window.addEventListener('pageshow', resetScroll);
  openButton.addEventListener('click', () => {
    resetScroll();
    if (window.WeddingMusic) window.WeddingMusic.play();
    openingScreen.classList.add('open-envelope');
    window.setTimeout(() => {
      resetScroll();
      openingScreen.classList.add('hide');
      invitation.classList.add('show');
    }, 850);
  });
})();
