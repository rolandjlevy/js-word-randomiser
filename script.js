const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const setSpeed = (speed) => $('.slider-display').textContent = speed + 'ms';
const maxHex = parseInt('ffffff', 16);
let timerId;

const abcArr = () => {
  return Array(26).fill().map((_, i) => {
    return String.fromCharCode('a'.charCodeAt(0) + i);
  });
}

const randomHex = () => {
  const num = Math.floor(Math.random() * Math.floor(maxHex));
  return num.toString(16).padEnd(6, "6af");
}

const randomChar = () => {
  const randomNum = Math.floor(Math.random() * (abc.length - 1));
  return abc[randomNum];
}

$('input[name=slider]').addEventListener('input', (e) => {
  setSpeed(e.target.value);
  if (timerId) {
    clearInterval(timerId);
  }
});

$('button[name=randomise]').addEventListener('click', (e) => {
  shuffle();
});

$('input[name=words]').addEventListener('keyup', (e) => {
  const inputText = e.target.value.trim();
  $('button[name=randomise]').disabled = !inputText.length;
  if (inputText.length && e.key && e.key.toUpperCase() == 'ENTER') {
    shuffle();
  }
});

function shuffle() {
  if (timerId) clearInterval(timerId);
  const speed = $('.slider').value;
  const inputText = $('input[name=words]').value.trim().replace(/ /g, "_")
  const destination = Array.from(inputText);
  const current = Array(destination.length).fill('').map(item => {
    return { letter:item, colour:`#${randomHex()}` }
  });
  timerId = setInterval(() => {
    $('.normal').innerHTML = current.map((item, index) => {
      if (item.letter !== destination[index]) {
        item.letter = randomChar();
        item.colour = randomHex();
      }
      const colour = item.letter == '_' ? 'transparent' : `#${item.colour}`;
      return `<span style="--col:${colour}" class="text">${item.letter}</span>`;
    }).join('');
    $('.mirrored').innerHTML = $('.normal').innerHTML;
    if (current.map(item => item.letter).join('') == destination.join('')) {
      clearInterval(timerId);
    }
  }, speed);
}

// Initialise
const abcUC = abcArr().map(n => n.toUpperCase());
const abc = [...abcArr(), ...abcUC, ...'____.,:;#?|"\'!@-=+£$%^&*()~'];
setSpeed(50);
$('input[name=words]').focus();