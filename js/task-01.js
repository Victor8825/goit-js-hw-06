const categoriesInfoEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesInfoEl.length}`);

categoriesInfoEl.forEach(elem => {
  console.log(`Category: ${elem.firstElementChild.textContent}`)
  console.log(`Elements: ${elem.querySelector('ul').children.length}`)
  });