const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listOfIngredients = document.getElementById('ingredients');
console.log(listOfIngredients);
const itemOfIngredients = ingredients.map(element => {
  const item = document.createElement('li');
  item.textContent = element;
  return item;
})
listOfIngredients.append(...itemOfIngredients);