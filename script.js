const $ = (selector) => document.querySelector(selector);
const maxHex = parseInt('ffffff', 16);
const randomNum = (n) => Math.floor(Math.random() * Math.floor(n));
const randomHex = () => randomNum(maxHex).toString(16);
const keyCodeA = 97;
const abcArr = String.fromCharCode(...[...Array(26)].map((_) => i++, i=keyCodeA));
const abc = [...abcArr, ...abcArr.toUpperCase(), ...'   '];

const getRandomChar = () => {
  const randomNum = Math.floor(Math.random() * (abc.length - 1));
  return abc[randomNum];
}

$('button[name=randomise]').addEventListener('click', (e) => {
  const inputText = $('input[name=words]').value.trim();
  shuffle(inputText);
});

function shuffle(inputText) {
  const destination = Array.from(inputText);
  const current = Array(destination.length).fill('').map(item => {
    return { letter:item, colour:`#${randomHex()}` }
  });
  const timerId = setInterval(() => {
    $('.display').innerHTML = current.map((item, index) => {      
      if (item.letter !== destination[index]) {
        item.letter = getRandomChar();
        item.colour = randomHex();
      }
      return `<span style="color:#${item.colour}">${item.letter}</span>`;
    }).join('');
    if (current.map(item => item.letter).join('') == destination.join('')) {
      console.log('done');
      clearInterval(timerId);
    }
  }, 5);
}