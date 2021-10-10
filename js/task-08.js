/* 
* Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

* Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

* Каждый созданный div:

    * Имеет случайный rgb цвет фона
    * Размеры самого первого div - 30px на 30px
    * Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

* Создай функцию destroyBoxes(), которая очищает div#boxes.
 */

const refs = {
  input: document.querySelector('#controls > input'),
  createBtn: document.querySelector('[data-action="render"]'),
  clearBtn: document.querySelector('[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', createBoxes);
refs.clearBtn.addEventListener('click', destroyBoxes);

let initialSize = 30;
refs.input.value = 0;

function createBoxes() {
  let inputValue = refs.input.value;

  let markup = '';

  for (let i = 0; i < inputValue; i += 1) {
    markup += `<div style="width: ${initialSize}px; height: ${initialSize}px; background-color: ${getRandomHexColor()};">
    </div>`;
    initialSize += 10;
  }

  refs.boxes.insertAdjacentHTML('beforeend', markup);

  refs.input.value = 0;
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
  initialSize = 30;
}

function getRandomHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}
