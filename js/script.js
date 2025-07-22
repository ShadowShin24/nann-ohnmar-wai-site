document.getElementById('revealBtn').addEventListener('click', () => {
  const msg = document.getElementById('message');
  msg.classList.toggle('visible');
});

const music = document.getElementById('bgMusic');
const toggle = document.getElementById('musicToggle');
let playing = false;

toggle.addEventListener('click', () => {
  playing ? music.pause() : music.play();
  toggle.textContent = playing ? '🔈' : '🔊';
  playing = !playing;
});
