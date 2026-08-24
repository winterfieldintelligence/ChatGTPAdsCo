const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const video = document.querySelector('.campaign-video');
const soundButton = document.querySelector('.video-sound');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation menu' : 'Close navigation menu');
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation menu');
      navigation.classList.remove('is-open');
    });
  });
}

if (video && soundButton) {
  video.volume = 0.75;
  video.play().catch(() => {
    video.muted = true;
    video.play();
    soundButton.setAttribute('aria-pressed', 'true');
    soundButton.setAttribute('aria-label', 'Unmute video');
    soundButton.querySelector('span').textContent = 'Unmute';
  });

  soundButton.addEventListener('click', () => {
    video.muted = !video.muted;
    const isMuted = video.muted;
    soundButton.setAttribute('aria-pressed', String(isMuted));
    soundButton.setAttribute('aria-label', isMuted ? 'Unmute video' : 'Mute video');
    soundButton.querySelector('span').textContent = isMuted ? 'Unmute' : 'Mute';
    video.play();
  });
}
