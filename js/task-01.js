const amountOfItems = document.querySelectorAll('.item');
console.log(`В списке ${amountOfItems.length} категории`);

amountOfItems.forEach(element => {
    const newTitle = element.querySelector('h2');
    console.log(`Категория: ${newTitle.textContent}`);

    const newItem = element.querySelectorAll('li');
    console.log(`Количество элементов: ${newItem.length}`);
});