const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsNewArray = ingredients.map(elem => {
const ingridientsItemEl = document.createElement('li');
ingridientsItemEl.textContent = elem;
ingridientsItemEl.classList.add('item');

return ingridientsItemEl;
});

const ingredientsListEl = document.querySelector('#ingredients');
ingredientsListEl.append(...ingredientsNewArray);

console.log(ingredientsListEl);

