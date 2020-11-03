const addCategoryButton = document.getElementById('addCategoryButton')


class toDoCategory {
    constructor(id, tasks){
        this.id = id;
        this.tasks = tasks;
    }
}

let categoryCollection = [];
let counter = 0;

const createNewCategory = () => {
    let newCatName = prompt('Name of your category');
    let newCat = new toDoCategory(newCatName, [4,6,5])
    categoryCollection.push(newCat)
    let bottomLeftContainer = document.getElementById('bottomLeftContainer')
    let newCategoryContainer = document.createElement('p')
    newCategoryContainer.classList.add('newCategory')
    newCategoryContainer.textContent = newCat.id;
    bottomLeftContainer.appendChild(newCategoryContainer)
    newCategoryContainer.setAttribute('id', `${counter}`)
    counter ++;
    setListeners()
}

const setListeners = () => {
let categories = Array.from(document.getElementsByClassName('newCategory'))
categories.forEach(category => {
    category.addEventListener('click', renderTasks)
})
}

const renderTasks = (e) => {
    removeTaskContent();
    let bottomRightContainer = document.getElementById('bottomRightContainer')
    let selectedCat = e.target.id;
    let selectedCatTasks = categoryCollection[`${selectedCat}`].tasks
   
    selectedCatTasks.forEach(task => {
        let tasksDisplay = document.createElement('p');
        tasksDisplay.textContent = task
        bottomRightContainer.appendChild(tasksDisplay)
    })
}

const removeTaskContent = () => {
    let bottomRightContainer = document.getElementById('bottomRightContainer')
    bottomRightContainer.textContent = '';
}

addCategoryButton.addEventListener('click', createNewCategory)



