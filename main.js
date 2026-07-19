



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
    
    // console.log ("Кнопка переключилась")
    // textTitle.style.color = redColorHash;
    // title.classList.toggle('active');
  })











// Кнопка меняющая цвет

// const changeColorButton = document.querySelector('#change-title-color-button');
// const textTitle = document.querySelector('.title'); // Нужно получить элемент заголовка

// // Определяем цвета


// changeColorButton.addEventListener('click', function () {
//     // Переключаем класс на кнопке (это работает!)
//     changeColorButton.classList.toggle('active');
    
//     // Меняем цвет текста в зависимости от наличия класса
//     if (changeColorButton.classList.contains('active')) {
//         textTitle.style.color = redColorHash;
//     } else {
//         textTitle.style.color = blueColorHash; // Или возвращаем исходный цвет
//     }
// });


// const btn = document.addEventListener('change-title-color-button');

// btn.addEventListener('click', () => {
//   btn.classList.toggle('active');
// });








// const colorChangeButton = document.querySelector('#change-title-color-button');




// const buttonRed = '#ff0000';
// const buttonGreen = '#00ff00';

// const changeColorButton = document.querySelector('#change-title-color-button');
// changeColorButton.addEventListener('click', () => {

//   changeColorButton.classList.toggle('active')
  
//   console.log(changeColorButton.classList.contains('active'))});









// const toggleColorBtn = document.querySelector('#change-title-color-button');
// toggleColorBtn.addEventListener('click', () => {
//   textTitle.classList.toggle('yellowColorHash');
// });





  // textTitle.style.color = redColorHash;


// const colorButton = document.querySelector('#change-title-color-button');

// colorButton.addEventListener('click', () => {
//   // textTitle.classList.toggle('active');
//   textTitle.classList.toggle('active-color');
// });










// const colorChangeButton = document.querySelector('#change-color-title-button');

// // Кнопка меняющая цвет
// colorChangeButton.addEventListener('click', changeColor);

// function changeColor() {
//   colorChangeButton.classList.toggle('change-color-title-button');
// }




