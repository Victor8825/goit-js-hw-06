const bodyEl = document.body;

const categoriesListEl = bodyEl.querySelector('#categories');

const categoriesItemsEl = categoriesListEl.children;
console.log(`Number of categories: ${categoriesItemsEl.length}`);

const categoriesItemsListEl = bodyEl.querySelectorAll('.item > ul');

const categoryTitlesEl = bodyEl.querySelectorAll('.item');
categoryTitlesEl.forEach(elem => {
  console.log(`Category: ${elem.firstElementChild.textContent}`)
  console.log(`Elements: ${elem.querySelector('ul').children.length}`)
  // categoriesItemsListEl.forEach(elem => {
  //   console.log(`Elements: ${elem.children.length}`)
  // })
})


// console.log(categoriesItemsListEl);



