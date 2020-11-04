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
    let newCat = new toDoCategory(newCatName, [])
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


// THERE IS AN ISSUE HERE WHICH MEANS EACH TIME IT RELOADS THE INPUT FIELD BECOMES INERT
// const removeTaskContent = () => {
//     let bottomRightContainer = document.getElementById('bottomRightContainer')
//     bottomRightContainer.innerHTML = '<input id="taskInputField" type="text" placeholder="Add task here..." autocomplete="off"></input><button id="addTaskButton">Add</button>';
// }

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

    categoryCollection.forEach(category => {
        category.active = false
    })
    categoryCollection[selectedCatNum].active = true
    renderTasks();
}

const addTaskButton = document.getElementById('addTaskButton');

const addTaskToCategory = (e) => {
    e.preventDefault();
    const newTaskInput = document.getElementById('taskInputField').value
    const activeCat = categoryCollection.find(element => element.active === true);
    activeCat.tasks.push(newTaskInput)
    renderTasks();
}


const renderTasks = () => {
    document.querySelectorAll('.tasksDisplay').forEach(e => e.remove());
    let activeCat = categoryCollection.find(element => element.active === true);
    let activeCatTasks = activeCat.tasks
    activeCatTasks.forEach(task => {
        let tasksDisplay = document.createElement('p');
        tasksDisplay.setAttribute('class', 'tasksDisplay')
        tasksDisplay.textContent = task
        bottomRightContainer.appendChild(tasksDisplay)
    })
}

// const renderTasks = () => {

// }

addTaskButton.addEventListener('click', addTaskToCategory)



addCategoryButton.addEventListener('click', createNewCategory)

// give flex-box stretchy when selecting active
// allow for actual task update category specific
// take input and add it to the active category
// delete functionality for categories
// delete functionality for tasks
// edit and update functionality for tasks - title, duedate, priority, notes, checklist


