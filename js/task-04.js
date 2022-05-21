const counterValue = document.querySelector('#value');
counterValue.textContent = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"');
buttonDecrement.addEventListener('click', () => {
  counterValue.textContent -= 1;
  });

const buttonIncrement = document.querySelector('button[data-action="increment"');
buttonIncrement.addEventListener('click', () => {
  counterValue.textContent ++;
});


