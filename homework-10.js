// 3. По аналогии с лекцией — создать и реализовать шаблон для карточек товаров. (Сразу посмотрите задание 5)
 
console.log('Задание 3')
 
import { productCards } from "./product-cards-file.js";
 
const productCardsTemplate = document.getElementById('productCards-template');
const productCardsList = document.getElementById('productCards-list');
 
productCards.forEach(card => {
   const cardClone = productCardsTemplate.content.cloneNode(true);
 
  cardClone.querySelector('.cardCategory').textContent = card.cardCategory;
  cardClone.querySelector('.cardName').textContent = card.cardName;
  cardClone.querySelector('.cardDescription').textContent = card.cardDescription;
  cardClone.querySelector('.cardCompound').textContent = card.cardCompound;
  cardClone.querySelector('.cardPrice').textContent = card.cardPrice;
  cardClone.querySelector('.cardImagine').textContent = card.cardImagine;
 
  productCardsList.appendChild(cardClone);
 
});
 
// console.log(productCardsList)2












 
console.log('Задание 4')
 
// 4. Используя метод .reduce(), получить массив объектов, где ключом является название товара, а значением — его описание
 
const nameDescriptionObject = productCards.reduce((accumulator, product) => {
  accumulator[product.cardName] = product.cardDescription;
  return accumulator;
}, {});
 
console.log(nameDescriptionObject);
 
// 5*. Реализовать функцию, которая при открытии страницы выводит сообщение (через функцию prompt) «Сколько карточек отобразить?
// От 1 до 5» и в зависимости от результата выводит введенное количество. Должна быть защита от ввода других значений (проверка if).
// То есть у нас будет 2 функции: одна возвращает количество карточек, которые нужно ввести, другая — отображает эти карточки
// (принимая в качестве аргумента массив).
 
// console.log('Задание 5')

// cloude написал
 
// // функция №1 — спрашивает у пользователя количество карточек и возвращает проверенное целое число от 1 до 5
// function getCardsCount() {
//   let count = Number(prompt('Сколько карточек отобразить? От 1 до 5'));
 
//   while (!Number.isInteger(count) || count < 1 || count > 5) {
//     count = Number(prompt('Нужно ввести целое число от 1 до 5. Попробуйте ещё раз:'));
//   }
 
//   return count;
// }
 
// // функция №2 — принимает массив карточек 

// function renderProductCards(cardsToShow) {
//   const productsList = document.querySelector('.products-list');
//   productsList.innerHTML = '';
 
//   cardsToShow.forEach(card => productsList.appendChild(card));
// }
 
// const allProductCards = Array.from(document.querySelectorAll('.product-card'));
// const cardsCount = getCardsCount();
 
// renderProductCards(allProductCards.slice(0, cardsCount));

console.log('Задание 5')
 
// функция №1 — с защитой от отмены
function getCardsCount() {
  while (true) {
    const userInput = prompt('Сколько карточек отобразить? От 1 до 5');
    
    if (userInput === null) {
      return 0; // Отмена
    }
    
    const count = Number(userInput);
    
    if (Number.isInteger(count) && count >= 1 && count <= 5) {
      return count;
    }
    
    alert('Нужно ввести целое число от 1 до 5. Попробуйте ещё раз:');
  }
}
 
// функция №2 — показывает карточки через display
function renderProductCards(cardsToShow) {
  const allCards = document.querySelectorAll('.product-card');
  
  // Скрываем все
  allCards.forEach(card => card.style.display = 'none');
  
  // Показываем нужные
  cardsToShow.forEach(card => card.style.display = 'block');
  
  console.log(`Показано карточек: ${cardsToShow.length}`);
}
 
const allProductCards = Array.from(document.querySelectorAll('.product-card'));
const cardsCount = getCardsCount();
 
if (cardsCount > 0) {
  renderProductCards(allProductCards.slice(0, cardsCount));
}