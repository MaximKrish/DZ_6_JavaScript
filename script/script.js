/*
1. Найти по id, используя getElementById, элемент с id равным "super_link" и
вывести этот элемент в консоль.
*/
console.log('Задача 1');

const elementId = document.getElementById('super_link');
// const elementIde = document.querySelector('#super_link');

console.log(elementId);
// console.log(elementIde);

/*
2. Внутри всех элементов на странице, которые имеют класс "card-link",
поменяйте текст внутри элемента на "ссылка".
*/
console.log('Задача 2');

const cardLink = document.querySelectorAll('.card-link');

for (let i = 0; i < cardLink.length; i++) {
    cardLink[i].textContent = 'ссылка';
};

console.log(cardLink);

/*
3. Найти все элементы на странице с классом "card-link", которые лежат в
элементе с классом "card-body" и вывести полученную коллекцию в консоль.
*/
console.log('Задача 3');

const cardEl = document.querySelectorAll('.card-body .card-link');

console.log(cardEl);

/*
4. Найти первый попавшийся элемент на странице у которого есть атрибут
data-number со значением 50 и вывести его в консоль.
*/
console.log('Задача 4');

const dataNum = document.querySelector('[data-number = "50"]');


console.log(dataNum);

/*
5. Выведите содержимое тега title в консоль.
*/
console.log('Задача 5');

const titleEl = document.querySelector('title');

console.log(titleEl);

/*
6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
*/
console.log('Задача 6');


const cardElm = document.querySelector('.card-title');
// const cardBody = document.querySelector('body');

// cardBody.appendChild(cardElm)
console.log(cardElm.parentNode);



// cardElm.insertBefore(cardElm, cardBody);

/*
7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный
тег в начало элемента, который имеет класс "card".
*/
console.log('Задача 7');
console.log('Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card"');


const element = document.querySelector('.card');
const newP = document.createElement('p');
const cardBo = document.querySelector('.card-body');

newP.textContent = 'Привет';
element.insertBefore(newP, cardBo);

/*
8. Удалите тег h6 на странице.
*/
console.log('Задача 8');
console.log('Удалите тег h6 на странице.');

const tegSix = document.querySelector('h6');

tegSix.remove();