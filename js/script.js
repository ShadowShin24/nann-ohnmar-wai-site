// Message reveal toggle
const revealBtn = document.getElementById('revealBtn');
const messageCard = document.getElementById('messageCard');

revealBtn.addEventListener('click', () => {
  const expanded = revealBtn.getAttribute('aria-expanded') === 'true';
  if (!expanded) {
    messageCard.classList.add('visible');
    messageCard.setAttribute('aria-hidden', 'false');
    messageCard.focus();
    revealBtn.setAttribute('aria-expanded', 'true');
  } else {
    messageCard.classList.remove('visible');
    messageCard.setAttribute('aria-hidden', 'true');
    revealBtn.setAttribute('aria-expanded', 'false');
  }
});

// Background music toggle
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let musicPlaying = false;

musicToggle.addEventListener('click', () => {
  if (musicPlaying) {
    bgMusic.pause();
    musicToggle.textContent = '🔈';
  } else {
    bgMusic.play();
    musicToggle.textContent = '🔊';
  }
  musicPlaying = !musicPlaying;
});

// Set initial music volume low for comfort
bgMusic.volume = 0.15;

// Floating petals creation
function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = (7 + Math.random() * 6) + 's';
  petal.style.animationDelay = Math.random() * 7 + 's';
  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, (parseFloat(petal.style.animationDuration) + parseFloat(petal.style.animationDelay)) * 1000);
}

setInterval(createPetal, 600);
