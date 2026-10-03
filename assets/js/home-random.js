(() => {
  const card = document.querySelector('[data-random-pick]');
  if (!card) return;
  const options = Array.from(card.querySelectorAll('[data-random-option]'));
  const content = card.querySelector('[data-random-content]');
  const button = card.querySelector('[data-random-button]');
  if (!content || !options.length) return;
  let current = -1;
  const pick = () => {
    const available = options.map((_, index) => index).filter(index => index !== current);
    if (!available.length) return;
    current = available[Math.floor(Math.random() * available.length)];
    content.replaceChildren(options[current].content.cloneNode(true));
  };
  pick();
  if (button && options.length > 1) {
    button.hidden = false;
    button.addEventListener('click', pick);
  }
})();
