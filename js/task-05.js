/*
 * Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
 */

/* const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

const onInputChange = e => {
  if (e.currentTarget.value === '') {
    refs.output.textContent = 'незнакомец';
  } else {
    refs.output.textContent = refs.input.value;
  }
};
 */

const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

const defaultValue = refs.output.textContent;

function onInputChange(e) {
  refs.output.textContent = e.currentTarget.value.trim();
  if (!refs.output.textContent) {
    refs.output.textContent = defaultValue;
  }
}
