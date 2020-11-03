const addCategoryButton = document.getElementById('addCategoryButton')


class toDoCategory {
    constructor(id, tasks){
        this.id = id;
        this.tasks = tasks;
        this.active = false;
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
categories.forEach(category => {
    category.addEventListener('click', displayCategoryHeading)
})
}

const renderTasks = (e) => {
    removeTaskContent();
    let bottomRightContainer = document.getElementById('bottomRightContainer')
    let selectedCat = e.target.id;
    let selectedCatTasks = categoryCollection[`${selectedCat}`].tasks
   
    selectedCatTasks.forEach(task => {
        let tasksDisplay = document.createElement('p');
        tasksDisplay.setAttribute('class', 'tasksDisplay')
        tasksDisplay.textContent = task
        bottomRightContainer.appendChild(tasksDisplay)
    })
}

const removeTaskContent = () => {
    let bottomRightContainer = document.getElementById('bottomRightContainer')
    bottomRightContainer.textContent = '';
}

const removeCategoryHeadingContent = () => {
    let topRightContainer = document.getElementById('topRightContainer')
    topRightContainer.textContent = '';
}
const displayCategoryHeading = (e) => {
    removeCategoryHeadingContent();
    let topRightContainer = document.getElementById('topRightContainer')
    let selectedCat = e.target.id


    let categoryDisplay = document.createElement('h1')
    categoryDisplay.textContent = categoryCollection[selectedCat].id
    categoryDisplay.setAttribute('id', 'categoryHeading')
    topRightContainer.appendChild(categoryDisplay);
    
}

addCategoryButton.addEventListener('click', createNewCategory)



