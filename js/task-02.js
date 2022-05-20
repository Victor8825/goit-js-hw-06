const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsNewArray = ingredients.map(elem => {
const ingridientsItem = document.createElement('li');
ingridientsItem.textContent = elem;
ingridientsItem.classList.add('item');

return ingridientsItem;
});

const ingredientsListEl = document.querySelector('#ingredients');
ingredientsListEl.append(...ingredientsNewArray);

console.log(ingredientsListEl);

