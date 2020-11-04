const addCategoryButton = document.getElementById('addCategoryButton')
const addTaskButton = document.getElementById('addTaskButton')
let categoryCollection = []
let counter = 0

class toDoCategory {
    constructor(id, tasks){
        this.id = id;
        this.tasks = tasks;
        this.active = false;
    }
}

const createNewCategory = () => {
    let newCategoryName = prompt('Name of your category')
    let newCategory = new toDoCategory(newCategoryName, [])
    categoryCollection.push(newCategory)
    let newCategoryContainer = document.createElement('p')
    newCategoryContainer.classList.add('newCategory')
    newCategoryContainer.textContent = newCategory.id
    bottomLeftContainer.appendChild(newCategoryContainer)
    newCategoryContainer.setAttribute('id', `${counter}`)
    counter ++
    setListeners()
}
addCategoryButton.addEventListener('click', createNewCategory)

const setListeners = () => {
    let categories = Array.from(document.getElementsByClassName('newCategory'))

    categories.forEach(category => {
        category.addEventListener('click', displayCategoryHeading)
    })
    categories.forEach(category => {
        category.addEventListener('click', setActiveCategory)
    })
}

const displayCategoryHeading = (e) => {
    topRightContainer.textContent = '';
    let selectedCategory = e.target.id
    let categoryDisplay = document.createElement('h1')
    categoryDisplay.textContent = categoryCollection[selectedCategory].id
    categoryDisplay.setAttribute('id', 'categoryHeading')
    topRightContainer.appendChild(categoryDisplay);
}

const setActiveCategory = (e) => {
    let displayedCategories = Array.from(document.getElementsByClassName('newCategory'));
    displayedCategories.forEach(category => {
        category.classList.remove('activeCategory')
    })
    let selectedCategoryNum = e.target.id
    let activeCategory = displayedCategories[selectedCategoryNum]
    activeCategory.classList.add('activeCategory')

    categoryCollection.forEach(category => {
        category.active = false
    })
    categoryCollection[selectedCategoryNum].active = true
    renderTasks();
}

const addTaskToCategory = (e) => {
    e.preventDefault();
    const newTaskInput = document.getElementById('taskInputField').value
    const activeCategory = categoryCollection.find(element => element.active === true);
    activeCategory.tasks.push(newTaskInput)
    renderTasks();
}
addTaskButton.addEventListener('click', addTaskToCategory)

const renderTasks = () => {
    document.querySelectorAll('.tasksDisplay').forEach(e => e.remove());
    let activeCategory = categoryCollection.find(element => element.active === true);
    let activeCategoryTasks = activeCategory.tasks
    activeCategoryTasks.forEach(task => {
        let tasksDisplay = document.createElement('p');
        tasksDisplay.setAttribute('class', 'tasksDisplay')
        tasksDisplay.textContent = task
        bottomRightContainer.appendChild(tasksDisplay)
    })
}

// delete functionality for categories
// delete functionality for tasks
// edit and update functionality for tasks - title, duedate, priority, notes, checklist


