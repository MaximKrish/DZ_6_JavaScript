/*
1. Найти по id, используя getElementById, элемент с id равным "super_link" и
вывести этот элемент в консоль.
*/

const elementId = document.getElementById('super_link');

console.log(elementId);

/*
2. Внутри всех элементов на странице, которые имеют класс "card-link",
поменяйте текст внутри элемента на "ссылка".
*/


const cardLnk = document.querySelectorAll('.card-link');

cardLnk.textContent = 'ссылка';

/*
3. Найти все элементы на странице с классом "card-link", которые лежат в
элементе с классом "card-body" и вывести полученную коллекцию в консоль.
*/

// const listLnk = document.querySelectorAll('.card-link + .card-body ');
// listLnk.forEach(element => {
//     console.log(element);
// });

/*
4. Найти первый попавшийся элемент на странице у которого есть атрибут
data-number со значением 50 и вывести его в консоль.
*/

// const dateNum = document.querySelector('data-number');

// console.log(dateNum);

/*
5. Выведите содержимое тега title в консоль.
*/

const titleEl = document.querySelector('title');

console.log(titleEl);

/*
6. Получите элемент с классом "card-title" и выведите его родительский узел
в консоль.
*/

// const cardEl = document.querySelector('.card-title');
// cardEl.parentNode();

/*
7. Создайте тег p, запишите внутри него текст "Привет" и добавьте созданный
тег в начало элемента, который имеет класс "card".
*/


// const elP = document.querySelector('.content');
// const newP = document.createElement('p');

// newP.textContent = 'Привет';
// elP.appendChild(newP);

/*
8. Удалите тег h6 на странице.
*/

const tegSix = document.querySelector('h6');

tegSix.remove();