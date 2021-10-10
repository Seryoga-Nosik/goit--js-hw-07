/*
 * Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
 * Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
 * Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
 * Для добавления стилей, используй CSS-классы valid и invalid.
 */

const input = document.getElementById('validation-input');

input.addEventListener('blur', checkInputValue);

function checkInputValue(e) {
  e.currentTarget.value.length === Number(this.dataset.length)
    ? (input.classList = 'valid')
    : (input.classList = 'invalid');

  if (!input.value) input.removeAttribute('class');
}
