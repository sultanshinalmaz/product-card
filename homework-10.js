
console.log('Задание 3')
 
// 3. По аналогии с лекцией — создать и реализовать шаблон для карточек товаров. (Сразу посмотрите задание 5)
 
import { productCards } from "./product-cards-file.js";
 
const productCardsTemplate = document.getElementById('productCards-template');
const productCardsList = document.getElementById('productCards-list');
 

function createCardElement(card) {
  const cardClone = productCardsTemplate.content.cloneNode(true);
 
  cardClone.querySelector('.cardCategory').textContent = card.cardCategory;
  cardClone.querySelector('.cardName').textContent = card.cardName;
  cardClone.querySelector('.cardDescription').textContent = card.cardDescription;
  cardClone.querySelector('.cardCompound').textContent = card.cardCompound;
  cardClone.querySelector('.cardPrice').textContent = card.cardPrice;
  cardClone.querySelector('.cardImagine').textContent = card.cardImagine;
 
  return cardClone;
}
 
productCards.forEach(card => {
  productCardsList.appendChild(createCardElement(card));
});
 
 
console.log('Задание 4')
 
// 4. Используя метод .reduce(), получить массив объектов, где ключом является название товара, а значением — его описание
 
const nameDescriptionObject = productCards.reduce((accumulator, product) => {
  accumulator[product.cardName] = product.cardDescription;
  return accumulator;
}, {});
 
console.log(nameDescriptionObject);
 
 
console.log('Задание 5')
 
// 5*. Реализовать функцию, которая при открытии страницы выводит сообщение (через функцию prompt) «Сколько карточек отобразить?
// От 1 до 5» и в зависимости от результата выводит введенное количество. Должна быть защита от ввода других значений (проверка if).
// То есть у нас будет 2 функции: одна возвращает количество карточек, которые нужно ввести, другая — отображает эти карточки
// (принимая в качестве аргумента массив).
 
function getCardsCount() {
  while (true) {
    const userInput = prompt('Сколько карточек отобразить? От 1 до 5');
 
    if (userInput === null) {
      return 0; // отмена
    }
 
    const count = Number(userInput);
 
    if (Number.isInteger(count) && count >= 1 && count <= 5) {
      return count;
    }
 
    alert('Нужно ввести целое число от 1 до 5. Попробуйте ещё раз:');
  }
}
 

function renderProductCards(cardsToShow) {
  productCardsList.innerHTML = '';
 
  cardsToShow.forEach(card => {
    productCardsList.appendChild(createCardElement(card));
  });
 
  console.log(`Показано карточек: ${cardsToShow.length}`);
}
 
const cardsCount = getCardsCount();
 
if (cardsCount > 0) {
  renderProductCards(productCards.slice(0, cardsCount));
}