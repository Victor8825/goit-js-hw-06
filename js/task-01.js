const bodyElement = document.body;
console.log(bodyElement);

const categories = document.querySelectorAll('ul>li.item');
console.log(categories);

categories.forEach( element => {
  console.log(element);
})


// console.log(categories.length());