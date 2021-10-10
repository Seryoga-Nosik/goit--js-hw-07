/*
 * Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().
 */

const ingredients = ['Картошка', 'Грибы', 'Чеснок', 'Помидоры', 'Зелень', 'Приправы'];

const ingredientsList = document.querySelector('#ingredients');

const makeMarkup = array => {
  return array.map(e => {
    const ingredientsItem = document.createElement('li');
    ingredientsItem.textContent = e;

    return ingredientsItem;
  });
};

ingredientsList.append(...makeMarkup(ingredients));
