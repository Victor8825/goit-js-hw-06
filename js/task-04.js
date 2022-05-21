const counterValueEl = document.querySelector('#value');
counterValueEl.textContent = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"');
buttonDecrement.addEventListener('click', () => {
  counterValueEl.textContent -= 1;
  });

const buttonIncrement = document.querySelector('button[data-action="increment"');
buttonIncrement.addEventListener('click', () => {
  counterValueEl.textContent ++;
});


