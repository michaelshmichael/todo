const addCategoryButton = document.getElementById('addCategoryButton')
const addTaskButton = document.getElementById('addTaskButton')
const submitButton = document.getElementById('submitButton')
const cancelInputButton = document.getElementById('cancelButton')
let inputTable = document.querySelector('.inputTable')
let inputTableContainer = document.getElementById('inputTableContainer')


let categoryCollection = []


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
    if (newCategoryName === "") {
        alert('Please Enter a Value')
    } else if (newCategoryName) {
        let newCategory = new toDoCategory(newCategoryName, [])
        categoryCollection.push(newCategory)
        console.log(categoryCollection)
        renderCategories()
        setListeners()
    } 
}
addCategoryButton.addEventListener('click', createNewCategory)

//Renders All Categories 
const renderCategories = () => {
    let counter = 0
    bottomLeftCategoryContainer.textContent = ''
    categoryCollection.forEach(category => {
        let newCategoryContainer = document.createElement('p')
        newCategoryContainer.classList.add('newCategory')
        newCategoryContainer.textContent = category.id
        bottomLeftCategoryContainer.appendChild(newCategoryContainer)
        newCategoryContainer.setAttribute('id', `${counter}`)
        newCategoryContainer.setAttribute('data-index', `${counter}`)

        let deleteCategoryButton = document.createElement('span')
        deleteCategoryButton.classList.add('deleteCategoryButton')
        deleteCategoryButton.setAttribute('data-index', `${counter}`)
        //deleteCategoryButton.innerHTML = "<i class=\"fa fa-trash\"></i>"
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
    const newTaskInput = document.getElementById('taskInputField').value
    e.preventDefault();
    if(newTaskInput === ''){
        alert('Please Enter a Value')
    } else if (newTaskInput){
    let taskTitleForm = document.getElementById('taskTitleForm')
    inputTable.classList.remove('inputTable')
    inputTable.classList.add('inputTableActive')
    inputTableContainer.setAttribute('id', 'inputTableContainerActive')
    taskTitleForm.textContent = `Details For ${newTaskInput}` 
    }  
}

// const checkActiveCategory = () => {
//     if(topRightContainer.textContent === ''){
//         alert('Please Select Category')
//     } else {
//         displayTaskInputForm
//     }
// }

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
    renderTasks()

    
}

submitButton.addEventListener('click', addTaskDataToCategory)


//Renders All Tasks of Active Category
const renderTasks = () => {
    let counter = 0
    document.querySelectorAll('.tasksDisplay').forEach(e => e.remove());
    let activeCategory = categoryCollection.find(element => element.active === true);
    let activeCategoryTasks = activeCategory.tasks
    activeCategoryTasks.forEach(task => {

        let tasksDisplay = document.createElement('p');
        tasksDisplay.setAttribute('class', 'tasksDisplay')
        
        tasksDisplay.textContent = `${task.id} Due: ${task.dueDate} Notes: ${task.notes}` 
        bottomRightContainer.appendChild(tasksDisplay)
        console.log(`${task.priority}`)
        let priorityIndicator = document.createElement('div')
            if(task.priority == "High"){
                priorityIndicator.classList.add('highPriorityIndicator')
            } else if (task.priority == "Medium"){
                priorityIndicator.classList.add('mediumPriorityIndicator')
            } else if (task.priority == "Low"){
                priorityIndicator.classList.add('lowPriorityIndicator')
            }
            tasksDisplay.appendChild(priorityIndicator)

        let deleteTaskButton = document.createElement('div')
        deleteTaskButton.setAttribute('class', 'deleteTaskButton')
        deleteTaskButton.setAttribute('data-index', `${counter}`)
        //deleteTaskButton.innerHTML = "<i class=\"fa fa-trash\"></i>"
        tasksDisplay.appendChild(deleteTaskButton)
        counter ++
    })
    counter = 0
    setListeners()

}

//Deletes Category When Delete Button Clicked
const deleteCategory = (e) => {
    if (confirm("Delete Category?") == true) {  
        console.log('delete button clicked')  
        document.querySelectorAll('.tasksDisplay').forEach(task => task.remove());
        const index = e.target.dataset.index;
        console.log(index)
        categoryCollection.splice(index, 1)
        renderCategories()
    } 
}

//MAKE DELETE TASK FUNCTION
const deleteTask = (e) => { 
    if (confirm("Delete Task?") == true) { 
        const activeCategory = categoryCollection.find(element => element.active === true);
        console.log("Active cat =" + activeCategory)
        const index = e.target.dataset.index
        console.log("index = " + index)
        activeCategory.tasks.splice(index, 1)
        renderTasks()
    }
}

cancelInputButton.addEventListener('click', () =>{
    inputTable.classList.remove('inputTableActive')
    inputTable.classList.add('inputTable')
    inputTableContainer.setAttribute('id', 'inputTableContainer')
})
