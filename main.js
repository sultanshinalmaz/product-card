// Покраска всех карточек

const productCards = document.querySelectorAll('.product-card');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00ff00';
const blueColorHash = '#0000ff';
const redColorHash = '#ff0000';
const yellowColorHash = '#1eff00';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

// Покраска одной карточки

const firstProductCard = document.querySelector('.product-card');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
})

// Вывод консоль лог

const outputLogButton = document.querySelector('#output-console-log');
outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №6'))

function outputConsoleLog(message) {
  console.log(message);
  alert(message);
}

//открыть Google

const openGoogleButton = document.querySelector('#open-google');
openGoogleButton.addEventListener('click', openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?');

  if (answer === true) {
    window.open('http://google.com')
  }
  else {
    return;
  }
}

// Вывод заголовка в консоль лог при наведении

const textTitle = document.querySelector('.title');

textTitle.addEventListener('mouseenter', () => {
  console.log(textTitle.textContent);
})

// Сменить цвет кнопки при нажатии

const changeColorButton = document.querySelector('#change-color-buttom');

  changeColorButton.addEventListener('click', ()=> {
  changeColorButton.classList.toggle('active');
})
