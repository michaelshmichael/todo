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
    console.log(categoryCollection)
    renderCategories()
    setListeners()
}
addCategoryButton.addEventListener('click', createNewCategory)

const setListeners = () => {
    let categories = Array.from(document.getElementsByClassName('newCategory'))
    let deleteCategoryButtons = Array.from(document.getElementsByClassName('deleteCategoryButton'))
    categories.forEach(category => {
        category.addEventListener('click', displayCategoryHeading)
        category.addEventListener('click', setActiveCategory)
    })
    deleteCategoryButtons.forEach(button => {
        button.addEventListener('click', deleteCategory)
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

const deleteCategory = (e) => {
    const index = e.target.dataset.index;
    console.log(index)
    // let displayedCategories = Array.from(document.getElementsByClassName('newCategory'));
    // displayedCategories.splice(index, 1)
    categoryCollection.splice(index, 1)
    console.log(categoryCollection)
    counter = 0
    renderCategories()
    
}

const renderCategories = () => {
    bottomLeftCategoryContainer.textContent = ''
    categoryCollection.forEach(category => {
        let newCategoryContainer = document.createElement('p')
        newCategoryContainer.classList.add('newCategory')
        newCategoryContainer.textContent = category.id
        bottomLeftCategoryContainer.appendChild(newCategoryContainer)
        newCategoryContainer.setAttribute('id', `${counter}`)
        newCategoryContainer.setAttribute('data-index', `${counter}`)

        let deleteCategoryButton = document.createElement('div')
        deleteCategoryButton.classList.add('deleteCategoryButton')
        deleteCategoryButton.setAttribute('data-index', `${counter}`)
        newCategoryContainer.appendChild(deleteCategoryButton)
        counter ++
    })
    setListeners()
}



// delete functionality for categories
    // make delete button appear when category is created
    // add event listener to button which calls deleteCategory function
    // deletes the whole container / deletes the button
    // removes the category from categoryCollection
    // re-render the categories - new function renderCategories



// delete functionality for tasks
// edit and update functionality for tasks - title, duedate, priority, notes, checklist


