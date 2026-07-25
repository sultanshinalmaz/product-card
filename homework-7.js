// ЗАДАНИЕ 3
// Вариант 1

let city = "Уфе";
let temperature = "36";
let message = `Сейчас в ${city} температура — ${temperature} градусов по Цельсию`
console.log(message)

// Вариант 2

function news(city1, temperature1) {
  console.log(`Сейчас в ${city1} температура — ${temperature1} градусов по Цельсию`)
}
news('Уфе','36')

// ЗАДАНИЕ 4

const SPEED_OF_LIGHT = 299_792_458; // метров в секунду
const speed = 299792458;

if (speed > SPEED_OF_LIGHT) {
  console.log('Сверхсветовая скорость')
}

else if (speed === SPEED_OF_LIGHT) {
  console.log('Скорость света')
}

else {
  console.log('Досветовая скорость')
}

// ЗАДАНИЕ 5

let honey = "Мед";
let price = 1000;
let budget = 900;

if (budget >= price) {
  console.log(`${honey} приобретён. Спасибо за покупку!`)
}

else {
  console.log(`Вам не хватает ${price - budget}$, пополните баланс`)
}

// ЗАДАНИЕ 6
function test  () {

}

// ЗАДАНИЕ 7

const waterBoiling = 100;
const value = 1000;
const cityBaraka = "Медина";