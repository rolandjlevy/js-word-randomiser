const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const maxHex = parseInt('ffffff', 16);

const abcArr = () => {
  return Array(26).fill().map((_, i) => String.fromCharCode('a'.charCodeAt(0) + i));
}

const abcUC = abcArr().map(n => n.toUpperCase());
const abc = [...abcArr(), ...abcUC, ...'____'];

const randomHex = () => {
  const num = Math.floor(Math.random() * Math.floor(maxHex));
  return num.toString(16);
}

const randomChar = () => {
  const randomNum = Math.floor(Math.random() * (abc.length - 1));
  return abc[randomNum];
}

$('button[name=randomise]').addEventListener('click', (e) => {
  const inputText = $('input[name=words]').value.trim().replace(/ /g, "_")
  shuffle(inputText);
});

$('input[name=words]').addEventListener('keyup', (e) => {
  const inputText = e.target.value.trim();
  console.log(inputText.length)
  $('button[name=randomise]').disabled = !inputText.length;
});

$('input[name=words]').focus();

function shuffle(inputText) {
  const destination = Array.from(inputText);
  const current = Array(destination.length).fill('').map(item => {
    return { letter:item, colour:`#${randomHex()}` }
  });
  const timerId = setInterval(() => {
    $('.normal').innerHTML = current.map((item, index) => {      
      if (item.letter !== destination[index]) {
        item.letter = randomChar();
        item.colour = randomHex();
      }
      return `<span style="--col:#${item.colour}" class="text">${item.letter}</span>`;
    }).join('');
    $('.mirrored').innerHTML = $('.normal').innerHTML;
    if (current.map(item => item.letter).join('') == destination.join('')) {
      clearInterval(timerId);
    }
  }, 50);
}