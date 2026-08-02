
// ЗАДАНИЕ 3

// Создайте объект на основе ваших данных.Имя, фамилия, почта, работа, должность, возраст, страна, город, статус отношений, максимум до 10
console.log('Задание 3');

const person = {
  name: 'Алмаз',
  surname: 'Султаншин',
  nationality: 'Татарин',
  email: 'asultanshin@mail.com',
  job: 'Программист',
  age: '29',
  country: 'Россия',
  city: 'Уфа',
  status: 'Холост'
}
console.log(person)

// ЗАДАНИЕ 4

//  Создайте объект, который будет хранить данные об автомобиле (марку, модель, год выпуска, цвет, тип коробки передач). 
//  Добавьте дополнительное свойство — владелец автомобиля, значением которого будет ОБЪЕКТ, описанный в пункте №3. 
//  Желательно добавлять его отдельной строкой (имеется в виду не при создании объекта)

console.log('Задание 4');
const personalCar =  {
  carMake: 'Nissan',
  model: 'Micra',
  year: '207',
  color: 'Рыжий',
  transmission: 'МКП',
  // maximumSpeed: '160'
}

personalCar.owner = person;
console.log(personalCar.owner)

// ЗАДАНИЕ 5 

// Написать функцию, которая в качестве аргумента будет принимать объект, описанный в пункте №4. 
// Она проверяет, есть ли в объекте свойство «максимальная скорость», и если нет, то добавляет его и присваивает значение, 
// а если есть, то прекращает выполнение (ничего не делает)

console.log('Задание 5');

function checkMaxSpeed(myCar) {
    if (!myCar.hasOwnProperty('maximumSpeed')) {
        myCar.maximumSpeed = '160';
        console.log('Максимальная скорость ' + myCar.maximumSpeed);
    }
}
checkMaxSpeed(personalCar); 

// ЗАДАНИЕ 6
// Написать функцию, которая получает первым аргументом объект, 
// а вторым — свойство объекта, которое нужно вывести, и выводит его значение.

console.log('Задание 6');

function objectProperty(object, property) {
  console.log(object[property]);
}
objectProperty(personalCar, 'model');
objectProperty(personalCar, 'color');


// ЗАДАНИЕ 7
// Создать массив, содержащий названия продуктов (просто строки)

console.log('Задание 7');
const products = ['Мед', 'Прополис', 'Пыльца'];
console.log(products)

// ЗАДАНИЕ 8

// Создать массив, состоящий из объектов, где объект представляет собой книгу (название, автор, год выпуска, цвет обложки, жанр) 
// (3–5 книг). Затем, используя известный нам метод массива, добавьте еще одну книгу в конец списка.
//  Можете заменить книги на фильмы или другие объекты — суть вы поняли.

console.log('Задание 8');

const scholars = [
  {
    nameScholar: 'Аль-Бухари',
    yearOfBirth: 810,
    yearOfDeath: 870,
    cityOfBirth: 'Бухара',
    book: 'Сахих аль-Бухари',
    sahih: true,
  },

  {
    nameScholar: 'Муслим',
    yearOfBirth: 821,
    yearOfDeath: 875,
    cityOfBirth: 'Нишапур',
    book: 'Сахих Муслим',
    sahih: true,
  },

    {
    nameScholar: 'Абу Дауд',
    yearOfBirth: 817,
    yearOfDeath: 888,
    cityOfBirth: 'Систан',
    book: 'Сунан Абу Дауд',
    sahih: false,
  },

    {
    nameScholar: 'Ат-Тирмизи',
    yearOfBirth: 825,
    yearOfDeath: 892,
    cityOfBirth: 'Термез',
    book: 'Сунан ат-Тирмизи',
    sahih: false,
  },
  {
    nameScholar: 'Ан-Насаи',
    yearOfBirth: 830,
    yearOfDeath: 915,
    cityOfBirth: 'Ниса',
    book: 'Сунана ан-Насаи',
    sahih: false,
  },

]

const IbnMajah = [
  {
    nameScholar: 'Ибн Маджа',
    yearOfBirth: 824,
    yearOfDeath: 886,
    cityOfBirth: 'Казвин',
    book: 'Сунан Ибн Маджа',
    sahih: false,
  }
]

const muslimScholars = scholars.concat(IbnMajah)
console.log(scholars)
console.log(muslimScholars)

// ЗАДАНИЕ 9
//  Создайте еще один массив, состоящий из тех же книг, но относящихся к определенной вселенной 
//  (Гарри Поттер, Марвел и т. д.). (Если используете другой объект, импровизируйте). 
//  С помощью известного нам метода массива или оператора (рекомендую использовать оператор) объедините эти два массива в один

console.log('Задание 9');

const booksOfBukhari = [
  {
    nameOfBook: 'Сахих аль-Бухари',
    sahih: true,
    volume: 7563,
  },

  {
    nameOfBook: 'Аль-Адаб аль-Муфрад',
    sahih: false,
    volume: 1300,
  },

    {
    nameOfBook: 'Ат-тарих аль-кабир',
    sahih: false,
    volume: 40000,
  }
]

const heritage = [...muslimScholars, ...booksOfBukhari];
console.log(heritage)

// ЗАДАНИЕ 10

// Почитать про метод массива — map. Написать функцию, которая принимает массив сущностей из задания №9. 
// Добавляем новое свойство для объекта "isRare (это редкое)" и в зависимости от года выпуска книги (или какой-то логики, связанной с вашей сущностью) устанавливаем true или false. 
// Что я хочу этим сказать: если книга выпущена после 2000 года, устанавливаем true (да, это редкое издание), если нет — false (значит, это не редкое издание).

console.log('Задание 10');

function isSahih(list) {
  return list.map(book => {
    if(book.sahih == true) {
      book.isSahih = 'Сахих'
    } else {
      book.isSahih = 'Не Сахих'
    }
    return book;
  });
}
console.log(isSahih(heritage));

