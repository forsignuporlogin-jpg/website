const openButton = document.getElementById('open-gift');
const giftContent = document.getElementById('gift-content');

openButton?.addEventListener('click', () => {
  giftContent.classList.remove('hidden');
  openButton.textContent = 'Gift opened ♡';
  openButton.disabled = true;
  giftContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
  burstHearts();
});

const notes = {
  miss: 'If you miss me right now, imagine me giving you the biggest, most ridiculous bear hug. 🫂 Distance is temporary; you are very much my favourite notification. 💗',
  reasons: 'Because you make ordinary calls feel special, because I love your little quirks, and because talking to you is one of the parts of my day I look forward to. Also, you are ridiculously cute. Case closed. 🎀',
  hug: 'HUG REQUEST APPROVED. 🧸 Please hold this imaginary hug for 10 seconds. No refunds, no exchanges, and unlimited replays whenever you need one. 💞'
};

document.querySelectorAll('[data-note]').forEach((button) => {
  button.addEventListener('click', () => {
    const reveal = document.getElementById('note-reveal');
    reveal.textContent = notes[button.dataset.note];
    reveal.classList.remove('hidden');
  });
});

document.getElementById('hug-button')?.addEventListener('click', () => {
  const result = document.getElementById('hug-result');
  result.textContent = '🫂 HUG DELIVERED! Redeem the real version when we meet. ♡';
  burstHearts();
});

function burstHearts() {
  const symbols = ['♡', '♥', '✦', '💗'];
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement('span');
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.cssText = [
      'position:fixed',
      'left:' + (8 + Math.random() * 84) + 'vw',
      'top:' + (25 + Math.random() * 50) + 'vh',
      'z-index:10',
      'pointer-events:none',
      'color:#e879a1',
      'font-size:' + (14 + Math.random() * 18) + 'px',
      'transition:transform 1.3s ease,opacity 1.3s ease',
      'opacity:1'
    ].join(';');
    document.body.appendChild(heart);
    requestAnimationFrame(() => {
      heart.style.transform = 'translateY(-90px) rotate(' + (Math.random() * 70 - 35) + 'deg)';
      heart.style.opacity = '0';
    });
    window.setTimeout(() => heart.remove(), 1450);
  }
}