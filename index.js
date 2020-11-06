const addCategoryButton = document.getElementById('addCategoryButton')
const addTaskButton = document.getElementById('addTaskButton')
const submitButton = document.getElementById('submitButton')
let inputTable = document.querySelector('.inputTable')
let inputTableContainer = document.getElementById('inputTableContainer')

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
        this.checklist = false;
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

//Renders All Categories 
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
    //let deleteTaskButtons = Array.from(document.getElementsByClassName('deleteTaskButton'))
    categories.forEach(category => {
        category.addEventListener('click', displayCategoryHeading)
        category.addEventListener('click', setActiveCategory)
    })
    deleteCategoryButtons.forEach(button => {
        button.addEventListener('click', deleteCategory)
    })
    // deleteTaskButtons.forEach(button => {
    //     button.addEventListener('click', deleteTask)
    // })

}

// Puts Active Category Name In The Header Box
const displayCategoryHeading = (e) => {
    topRightContainer.textContent = '';
    let selectedCategory = e.target.id
    let categoryDisplay = document.createElement('h1')
    categoryDisplay.textContent = categoryCollection[selectedCategory].id
    categoryDisplay.setAttribute('id', 'categoryHeading')
    topRightContainer.appendChild(categoryDisplay);
}

//Makes Active Category When Clicked - And Displays Its Tasks
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

//Displays Input Form When 'Add' Button Clicked- Takes Title of From from Text Input
const displayTaskInputForm = (e) => {
    e.preventDefault();
    let taskTitleForm = document.getElementById('taskTitleForm')
    
    inputTable.classList.remove('inputTable')
    inputTable.classList.add('inputTableActive')
    inputTableContainer.setAttribute('id', 'inputTableContainerActive')
    const newTaskInput = document.getElementById('taskInputField').value
    taskTitleForm.textContent = newTaskInput   
}
addTaskButton.addEventListener('click', displayTaskInputForm)

//Takes Data from Form and Adds It To Task and Puts Task into Category
const addTaskDataToCategory = () => {
    
    let taskID = document.getElementById('taskInputField').value
    let dueDateValue = document.getElementById('dueDate').value
    let priorityValue
    if (document.getElementById('highPriority').checked) {
        priorityValue = 'High'
      } else if (document.getElementById('mediumPriority').checked) {
        priorityValue = 'Medium'
      } else if (document.getElementById('lowPriority').checked){
          priorityValue = 'Low'
      }
    let notesValue = document.getElementById('notes').value
    let newTask = new task (taskID, dueDateValue, priorityValue, false, notesValue)
    
    //This could be decoupled
    const activeCategory = categoryCollection.find(element => element.active === true);
    activeCategory.tasks.push(newTask)
    inputTable.classList.remove('inputTableActive')
    inputTableContainer.setAttribute('id', 'inputTableContainer')
    // renderCategories()
    renderTasks()

}
submitButton.addEventListener('click', addTaskDataToCategory)

//Renders All Tasks of Active Category
const renderTasks = () => {
    document.querySelectorAll('.tasksDisplay').forEach(e => e.remove());
    let activeCategory = categoryCollection.find(element => element.active === true);
    let activeCategoryTasks = activeCategory.tasks
    activeCategoryTasks.forEach(task => {
        let tasksDisplay = document.createElement('p');
        tasksDisplay.setAttribute('class', 'tasksDisplay')
        //PUT IN TASK DETAILS HERE :)
        tasksDisplay.textContent = `${task.id} ${task.dueDate}` 
        
        bottomRightContainer.appendChild(tasksDisplay)

        let deleteTaskButton = document.createElement('div')
        deleteTaskButton.setAttribute('class', 'deleteTaskButton')
        //GIVE DATA VALUE TO DELETE BUTTON
        tasksDisplay.appendChild(deleteTaskButton)
    })
    setListeners()
}

//Deletes Category When Delete Button Clicked
const deleteCategory = (e) => {
    if (confirm("Delete Category?") == true) {    
        document.querySelectorAll('.tasksDisplay').forEach(task => task.remove());
        const index = e.target.dataset.index;
        categoryCollection.splice(index, 1)
        renderCategories()
    } 
}


//MAKE DISPLAY TASK MORE DETAILED
    ////Create flexbox for each task entry
    //Display due date
    //Display priority level (colour)
    //Display notes when clicked
    //Provide checkbox
    //Give delete button

//MAKE DELETE TASK FUNCTION
//const deleteTask = (e) => {
    //Give task data index
    //Match the data index to the index in the task array
    //Remove task from array and re-render the tasks
//}


