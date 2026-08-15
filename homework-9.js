console.log('Уровень 1:')

//  Создать массив чисел от 1 до 10. Отфильтровать его таким образом, чтобы получить массив чисел, начиная с 5.
console.log('Задание 2')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredFive = numbers.filter(numbers => numbers >= 5);
console.log(filteredFive) 


// Создать массив строк, относящихся к любой сущности (названия фильмов/книг, кухонные приборы, мебель и т. д.), проверить, есть ли в массиве какая-то конкретная сущность.
console.log('Задание 3')

const muslimScholars = ['Бухари', 'Муслим', 'АбуДауд', 'Тирмизи', 'Ибн Маджа', 'Ан-Насаи'];

const newArrayTrue = muslimScholars.includes('Бухари')
const newArrayFalse = muslimScholars.includes('Бейхаки')

console.log(newArrayTrue)
console.log(newArrayFalse)

// Написать функцию, которая будет принимать массив в качестве аргумента и менять его порядок на противоположный ("переворачивать") . С помощью этой функции перевернуть два указанных выше массива.
console.log('Задание 4')

function reverseArray(array) {
  return [...array].reverse();  
};

console.log(reverseArray(numbers));
console.log(reverseArray(muslimScholars));


console.log('Уровень 2:')

// 5.
// Добавить файл comments.js, в нём создать константу и в него поместить первые 10 объектов этого массива. 
// Данный массив представляет собой пример комментариев в соц. сетях, поэтому переменная должна быть названа по смыслу.
// Не забудьте удалить квадратные кавычки у ключей объектов (можно использовать Chat GPT, что бы не делать это вручную)
// 6.
// Сделать константу экспортируемой, добавив перед "const" ключевое слово "export". Таким образом мы сможем внедрить переменную из comments.js в homework-9.js и работать с ней. 
// Когда мы введем название переменной, нам предложит импортировать ее - так и делаем.

console.log('Задание 7')
// 7. Вывести в консоль массив тех комментариев, почта пользователей которых содержит ".com"

import { commentsArray } from "./comments.js";

const findCom = commentsArray.filter( comment => {
return comment.email.includes('.com');
})
console.log(findCom)

console.log('Задание 8')

// 8. Перебрать массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2, а те, у кого id больше 5, имели postId: 1


const  changePostId = commentsArray.map(index => {
  // Создаем копию объекта и перезаписываем postId по условию
  if (index.id >= 5) {
    return { ...index, postId: 1 };
  } else {
    return { ...index, postId: 2 };
  }
});

// Проверяем результат
console.log(changePostId); 

console.log('Задание 9')

//9. Перебрать массив, что бы объекты состояли только из айди и имени

const idNameArray = commentsArray.map(index => ({
  id: index.id,
  name: index.name
}))
console.log(idNameArray)


console.log('Задание 10')

// 10. Перебираем массив, добавляем объектам свойство isInvalid и проверяем: 
// если длина тела сообщения (body) больше 180 символов, устанавливаем true, если меньше — false.

const addIsInvalid = commentsArray.map(line => {
  const bodyLength = line.body.length;

  if (bodyLength > 180) {

    return { ...line, isInvalid: true, textLength: bodyLength };

  } else {
    return { ...line, isInvalid: false, textLength: bodyLength };
  }
});

console.log(addIsInvalid);



console.log('Уровень 3:')

console.log('Задание 11')

// 11. Почитать про метод массива reduce. С его помощью вывести массив почтовых адресов и проделать то же самое с помощью метода map

// map
const emailArray1 = commentsArray.map(index => index.email);

console.log(emailArray1);

// reduce
const emailArray2 = commentsArray.reduce((accumulator, currentValue) => {
  return accumulator.concat([currentValue.email]);
}, []);

console.log(emailArray2);


console.log('Задание 12')

// 12. Почитать про методы toString(), join() и, перебрав массив из задания №11, привести его к строковому типу.

// toString()

console.log(emailArray1.toString());

// join()

console.log(emailArray1.join(' / '));
console.log(emailArray1.join(' ; '));
console.log(emailArray1.join(' - '));




