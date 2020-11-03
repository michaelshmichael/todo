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
categories.forEach(category => {
    category.addEventListener('click', setActiveCategory)
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

const setActiveCategory = (e) => {
    let displayedCategories = Array.from(document.getElementsByClassName('newCategory'));
    displayedCategories.forEach(category => {
        category.classList.remove('activeCat')
    })
    let selectedCatNum = e.target.id
    let activeCat = displayedCategories[selectedCatNum]
    activeCat.classList.add('activeCat')
}

addCategoryButton.addEventListener('click', createNewCategory)

// give flex-box stretchy when selecting active
// allow for actual task update category specific
// take input and add it to the active category

