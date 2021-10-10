/* 
* Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

* Создай переменную counterValue в которой будет хранится текущее значение счетчика.
* Создай функции increment и decrement для увеличения и уменьшения значения счетчика
* Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
 */

const refs = {
  counter: document.querySelector('#counter'),
  value: counter.querySelector('#value'),
  increment: counter.querySelector('[data-action="increment"]'),
  decrement: counter.querySelector('[data-action="decrement"]'),
};

let currentValue = 0;

const onIncrementClick = () => {
  currentValue += 1;
  refs.value.textContent = currentValue;
};

const onDecrementClick = () => {
  currentValue -= 1;
  refs.value.textContent = currentValue;
};

refs.decrement.addEventListener('click', onDecrementClick);
refs.increment.addEventListener('click', onIncrementClick);
