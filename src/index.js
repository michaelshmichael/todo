import {task} from './taskClass.js'
import {setCategoryListeners} from './setCategoryListeners.js'


// let categoryCollection
// if (localStorage.getItem('categoryCollection')) {
// categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'))
// } else {
// categoryCollection = []
// }
// localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
// let data = JSON.parse(localStorage.getItem('categoryCollection'));

const Category = (() => {
    
    let categoryCollection = []

    function setActiveCategory(e){
        let displayedCategories = Array.from(document.getElementsByClassName('newCategory'));
        displayedCategories.forEach(category => {
            category.classList.remove('activeCategory')
        })
        let selectedCategoryNum = e.target.id
        let activeCategory = displayedCategories[selectedCategoryNum]
        activeCategory.classList.add('activeCategory')

        makeAllCategoriesInactive()
        categoryCollection[selectedCategoryNum].active = true
        //localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
        Tasks.renderTasks(); 
    }

    function makeAllCategoriesInactive(){
        categoryCollection.forEach(category => {
            category.active = false
        })
    }
    //makeAllCategoriesInactive()

    function identifyActiveCategory(){
        let activeCategory = categoryCollection.find(element => element.active === true);
        return activeCategory
    }
   
    return{identifyActiveCategory, categoryCollection, setActiveCategory, makeAllCategoriesInactive}
})()

const Tasks = (() => {

    const addTaskButton = document.getElementById('addTaskButton')
    const submitButton = document.getElementById('submitButton')
    const cancelInputButton = document.getElementById('cancelButton')
    const inputTable = document.querySelector('.inputTable')
    const inputTableContainer = document.getElementById('inputTableContainer')
    const importanceButton = document.getElementById('importanceButton')
    const dateButton = document.getElementById('dateButton')
    
    

    function addTaskListeners(){
        addTaskButton.addEventListener('click', displayTaskInputForm)
        submitButton.addEventListener('click', setNewTaskValues)
        //submitButton.addEventListener('click', setEditedTaskValue)
        
        let deleteTaskIcons = Array.from(document.getElementsByClassName('deleteTaskIcon'))
        deleteTaskIcons.forEach(button => {
                button.addEventListener('click', deleteTask)
        })
        cancelInputButton.addEventListener('click', () =>{
            inputTable.classList.remove('inputTableActive')
            inputTable.classList.add('inputTable')
            inputTableContainer.setAttribute('id', 'inputTableContainer')
            resetTaskInputValues()
        })
        importanceButton.addEventListener('click', orderTasksByImportance)
        dateButton.addEventListener('click', orderTasksByDate)
        let checkboxes = Array.from(document.getElementsByClassName('checkboxComplete'))
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('click', setTaskAsComplete)
            })
        //let editTaskIcons = Array.from(document.getElementsByClassName('editTaskIcon'))
        // editTaskIcons.forEach(icon => {
        //     icon.addEventListener('click', editTaskContent)
        //     newTaskSubmission = false
        // })
    }
    addTaskListeners()

    function displayTaskInputForm(e){
        const newTaskInput = document.getElementById('taskInputField').value
        e.preventDefault();
        if (Category.identifyActiveCategory() === undefined){
            alert('Please Select a Category')
        } else if(newTaskInput === ''){
            alert('Please Enter a Value')
        } else if (newTaskInput){
        let taskTitleForm = document.getElementById('taskTitleForm')
        inputTable.classList.remove('inputTable')
        inputTable.classList.add('inputTableActive')
        inputTableContainer.setAttribute('id', 'inputTableContainerActive')
        taskTitleForm.textContent = `Details For ${newTaskInput}` 
        }
    }
    
    function setNewTaskValues() {
        let taskID = document.getElementById('taskInputField').value
        let dueDateValue = document.getElementById('dueDate').value
        let priorityValue
        if (document.getElementById('highPriority').checked) {
            priorityValue = 1
        } else if (document.getElementById('mediumPriority').checked) {
            priorityValue = 2
        } else if (document.getElementById('lowPriority').checked){
            priorityValue = 3
        } else {
            alert('Please Select a Priority Level')
            setNewTaskValues()
        }
        let notesValue = document.getElementById('notes').value
        let newTask = new task (taskID, dueDateValue, priorityValue, false, notesValue)
        addTaskToActiveCategory(newTask)
    }

    function addTaskToActiveCategory(newTask) {
        Category.identifyActiveCategory().tasks.push(newTask)
        inputTable.classList.remove('inputTableActive')
        inputTableContainer.setAttribute('id', 'inputTableContainer')
        //localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
        resetTaskInputValues()
        renderTasks()
    }

    function renderTasks() {
        let counter = 0
        document.querySelectorAll('.tasksDisplay').forEach(e => e.remove());
        document.querySelectorAll('.completedTasksDisplay').forEach(e => e.remove());
        let activeCategory = Category.categoryCollection.find(element => element.active === true);
        let activeCategoryTasks = activeCategory.tasks
        activeCategoryTasks.forEach(task => {
            let tasksDisplay = document.createElement('div');
            if(task.checklist == false){
                tasksDisplay.setAttribute('class', 'tasksDisplay')
            } else {
                 tasksDisplay.setAttribute('class', 'completedTasksDisplay') 
            }
            let taskInfoContainer = document.createElement('div')
            taskInfoContainer.setAttribute('class', 'taskInfoContainer')
            bottomRightContainer.appendChild(tasksDisplay)
            
            let priorityIndicator = document.createElement('div')

                if(task.priority == 1){
                    priorityIndicator.classList.add('highPriorityIndicator')
                } else if (task.priority == 2){
                    priorityIndicator.classList.add('mediumPriorityIndicator')
                } else if (task.priority == 3){
                    priorityIndicator.classList.add('lowPriorityIndicator')
                }

            let taskNameAndDueDateContainer = document.createElement('div')
            taskNameAndDueDateContainer.setAttribute('class', 'taskNameAndDueDateContainer')

            let taskName = document.createElement('div')
            taskName.setAttribute('class', 'taskName')
            taskName.textContent = `${task.id}`

            let dueDate = document.createElement('div')
            dueDate.setAttribute('class', 'dueDate')
            dueDate.textContent = `Due: ${task.dueDate}`

            let notesContainer = document.createElement('div')
            notesContainer.setAttribute('class', 'notesContainer')

            let notesHeading = document.createElement('div')
            notesHeading.setAttribute('class', 'notesHeading')

            let notesContent = document.createElement('div')
            notesContent.setAttribute('class', 'notesContent')
            notesContent.textContent = `${task.notes}`

            tasksDisplay.appendChild(priorityIndicator)
            tasksDisplay.appendChild(taskInfoContainer)
            taskInfoContainer.appendChild(taskNameAndDueDateContainer)
            taskNameAndDueDateContainer.appendChild(taskName)
            taskNameAndDueDateContainer.appendChild(dueDate)
            taskInfoContainer.appendChild(notesContainer)
            notesContainer.appendChild(notesHeading)
            notesContainer.appendChild(notesContent)
            notesHeading.textContent = 'Notes'

            let deleteEditAndCheckContainer = document.createElement('div')
            deleteEditAndCheckContainer.setAttribute('class', 'deleteEditAndCheckContainer')
            taskInfoContainer.appendChild(deleteEditAndCheckContainer)

            let deleteTaskIcon = document.createElement('i')
            deleteTaskIcon.setAttribute('class', 'fa fa-trash deleteTaskIcon')
            deleteTaskIcon.setAttribute('data-index', `${counter}`)
            deleteEditAndCheckContainer.appendChild(deleteTaskIcon)
            

            let editTaskIcon = document.createElement('i')
            editTaskIcon.setAttribute('class', 'fa fa-edit editTaskIcon')
            editTaskIcon.setAttribute('data-index', `${counter}`)
            deleteEditAndCheckContainer.appendChild(editTaskIcon)
            

            let checkboxComplete = document.createElement('i')
            checkboxComplete.setAttribute('class', 'fa fa-check-circle checkboxComplete')
            checkboxComplete.setAttribute('data-index', `${counter}`)
            
            deleteEditAndCheckContainer.appendChild(checkboxComplete)
            counter++
        })
        counter = 0
        addTaskListeners()
    }

    function setTaskAsComplete(e) {
        let checkboxNumber = e.target.dataset.index
        let activeCategory = Category.categoryCollection.find(element => element.active === true);
        let completedTask = activeCategory.tasks[checkboxNumber]
        if(completedTask.checklist) {
            completedTask.checklist = false
        } else {
            completedTask.checklist = true
        }
        //localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection)); 
        renderTasks()  
    }

    function resetTaskInputValues (){
        let taskID = document.getElementById('taskInputField')
        let dueDate = document.getElementById('dueDate')
        let notes = document.getElementById('notes')
        taskID.value = ''
        dueDate.value = ''
        notes.value = ''
    }

    //HERE ARE EDITING FUCTIONS HIDDEN
    // function editTaskContent(e) {
    //     let editNumber = e.target.dataset.index
    //     let activeCategory = categoryCollection.find(element => element.active === true);
    //     let taskToEdit = activeCategory.tasks[editNumber]

    //     inputTable.classList.remove('inputTable')
    //     inputTable.classList.add('inputTableActive')
    //     inputTableContainer.setAttribute('id', 'inputTableContainerActive')

    //     let taskTitleForm = document.getElementById('taskTitleForm')
    //     let dueDateForm = document.getElementById('dueDate')
    //     let notes = document.getElementById('notes')
    //     let highPriority = document.getElementById('highPriority')
    //     let mediumPriority = document.getElementById('mediumPriority')
    //     let lowPriority = document.getElementById('lowPriority')

    //     taskTitleForm.textContent = `Edit details For ${taskToEdit.id}` 
    //     dueDateForm.value = `${taskToEdit.dueDate}`
    //     notes.textContent = `${taskToEdit.notes}`

    //     if (`${taskToEdit.priority}` == 1) {
    //         highPriority.setAttribute('checked', 'x')
    //     } else if (`${taskToEdit.priority}` == 2) {
    //         mediumPriority.setAttribute('checked', 'x')
    //     } else {
    //         lowPriority.setAttribute('checked', 'x')
    //     }
        
    //     return taskToEdit
    // }    

    // function setEditedTaskValue(){
    //     let taskToEdit = editTaskContent()
    //     let taskID = taskToEdit.id
    //     let dueDateValue = document.getElementById('dueDate').value
    //     let priorityValue
    //     if (document.getElementById('highPriority').checked) {
    //         priorityValue = 1
    //     } else if (document.getElementById('mediumPriority').checked) {
    //         priorityValue = 2
    //     } else if (document.getElementById('lowPriority').checked){
    //         priorityValue = 3
    //     }
    //     let notesValue = document.getElementById('notes').value
    //     let newTask = new task (taskID, dueDateValue, priorityValue, false, notesValue)

    //     let activeCategory = categoryCollection.find(element => element.active === true);
    //     let index = activeCategory.indexOf(taskToEdit)
    //     console.log(index)
    //     activeCategory.tasks.splice(index, 1)
    //     //localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
    //     addTaskToActiveCategory(newTask)
    // }

    function orderTasksByImportance() {
        console.log('order by importance')
        let activeCategory = Category.categoryCollection.find(element => element.active === true);
        let activeCategoryTasks = activeCategory.tasks
        activeCategoryTasks.sort(function(a,b){ 
            return a.priority > b.priority ? 1 : a.priority < b.priority ? -1 : 0;
        })
    
        //localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection)); 
        renderTasks()  
    }
   
    
    function orderTasksByDate() {
        console.log('order by date')
        let activeCategory = Category.categoryCollection.find(element => element.active === true);
        let activeCategoryTasks = activeCategory.tasks
        activeCategoryTasks.sort(function(a,b){
            return a.dueDate > b.dueDate ? 1 : a.dueDate < b.dueDate ? -1 : 0;
        })
        //localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
        renderTasks()
    }
    
   
    function deleteTask(e) { 
        if (confirm("Delete Task?")) { 
            const activeCategory = Category.categoryCollection.find(element => element.active === true);
            const index = e.target.dataset.index
            activeCategory.tasks.splice(index, 1)
            //localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
            renderTasks()
        }
    }
    return {renderTasks}
})()

setCategoryListeners()

export {Category, Tasks}










    
    


    


    
    




