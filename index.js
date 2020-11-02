const addCategoryButton = document.getElementById('addCategoryButton')

class toDoCategory {
    constructor(id, tasks){
        this.id = id;
        this.tasks = tasks;
    }
}

let categoryCollection = [];

const createNewCategory = () => {
    let newCatName = prompt('Name of your category');
    let newCat = new toDoCategory(newCatName, [4,6,5])
    categoryCollection.push(newCat)
    console.log(newCat.id)
    console.log(newCat.tasks)
    console.log(categoryCollection)
    let bottomLeftContainer = document.getElementById('bottomLeftContainer')

    let newCategoryContainer = document.createElement('p')
    newCategoryContainer.classList.add('newCategory')
    newCategoryContainer.textContent = newCat.id;
    bottomLeftContainer.appendChild(newCategoryContainer)
    setListeners()
}

const setListeners = () => {
let categories = Array.from(document.getElementsByClassName('newCategory'))
categories.forEach(category => {
    category.addEventListener('click', renderTasks)
})
}

const renderTasks = () => {
    console.log('poopoo')
    let bottomRightContainer = document.getElementById('bottomRightContainer')
    let tasksDisplay = document.createElement('p');
    console.log(categoryCollection[0].tasks)
    tasksDisplay.textContent = categoryCollection[0].tasks

    bottomRightContainer.appendChild(tasksDisplay)
}



addCategoryButton.addEventListener('click', createNewCategory)


