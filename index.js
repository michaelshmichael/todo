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

class task {
    constructor(id, dueDate, priority, checklist, notes){
        this.id = id;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = checklist;
        this.notes = notes;
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
    counter = 0
    setListeners()
}

const setListeners = () => {
    let categories = Array.from(document.getElementsByClassName('newCategory'))
    let deleteCategoryButtons = Array.from(document.getElementsByClassName('deleteCategoryButton'))
    let deleteTaskButtons = Array.from(document.getElementsByClassName('deleteTaskButton'))
    categories.forEach(category => {
        category.addEventListener('click', displayCategoryHeading)
        category.addEventListener('click', setActiveCategory)
    })
    deleteCategoryButtons.forEach(button => {
        button.addEventListener('click', deleteCategory)
    })
    deleteTaskButtons.forEach(button => {
        button.addEventListener('click', deleteTask)
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

    let newTask = new task (newTaskInput, 'dueDate', 'priority', 'checklist', 'notes')
    activeCategory.tasks.push(newTask)
    renderTasks();
    console.log(categoryCollection)
}
addTaskButton.addEventListener('click', addTaskToCategory)

const renderTasks = () => {
    document.querySelectorAll('.tasksDisplay').forEach(e => e.remove());
    let activeCategory = categoryCollection.find(element => element.active === true);
    let activeCategoryTasks = activeCategory.tasks
    activeCategoryTasks.forEach(task => {
        let tasksDisplay = document.createElement('p');
        tasksDisplay.setAttribute('class', 'tasksDisplay')
        tasksDisplay.textContent = task.id
        bottomRightContainer.appendChild(tasksDisplay)

        let deleteTaskButton = document.createElement('div')
        deleteTaskButton.setAttribute('class', 'deleteTaskButton')
        //GIVE DATA VALUE TO DELETE BUTTON
        tasksDisplay.appendChild(deleteTaskButton)
    })
    setListeners()
}

const deleteCategory = (e) => {
    if (confirm("Delete Category?") == true) {    
        document.querySelectorAll('.tasksDisplay').forEach(task => task.remove());
        const index = e.target.dataset.index;
        categoryCollection.splice(index, 1)
        renderCategories()
    } 
}

//MAKE DELETE TASK FUNCTION
const deleteTask = () => {
    //Give task data index
    //Match the data index to the index in the task array
    //Remove task from array and re-render the tasks
}

// edit and update functionality for tasks - title, duedate, priority, notes, checklist


