import {task} from './taskClass.js'
import {createNewCategory} from './createNewCategory.js'
import {displayCategoryHeading} from './displayCategoryHeading.js'
import {deleteCategory} from './deleteCategory.js'
import {setActiveCategory} from './setActiveCategory.js'
import {renderTasks} from './renderTasks.js'
import {orderTasksByImportance} from './orderTasksByImportance.js'
import {orderTasksByDate} from './orderTasksByDate.js'
import {setTaskAsComplete} from './alteringExistingTasks.js'
import {deleteTask} from './alteringExistingTasks.js'
import {displayTaskInputForm} from './createNewTask.js'
import {setNewTaskValues} from './createNewTask.js'
import {cancelTaskInput} from './createNewTask.js'


const Category = (() => {
    
    let categoryCollection = []
    
    const setCategoryListeners = () =>{
        const displayCategoryInput = document.getElementById('addCategoryButton')
        const categoryInputTable = document.querySelector('.categoryInputTable')
        const categoryInputField = document.getElementById('categoryInputField')
        const submitCategory = document.getElementById('submitCategory')
        const cancelCategoryInput = document.getElementById('cancelCategoryInput')
        let categories = Array.from(document.getElementsByClassName('newCategory'))
        let deleteCategoryIcons = Array.from(document.getElementsByClassName('deleteCategoryIcon'))
        categories.forEach(category => {
            category.addEventListener('click', displayCategoryHeading)
            category.addEventListener('click', setActiveCategory)
        })
        
        deleteCategoryIcons.forEach(button => {
            button.addEventListener('click', deleteCategory)
        })
        displayCategoryInput.addEventListener('click', () => {
            categoryInputTable.classList.remove('categoryInputTable')
            categoryInputTable.classList.add('categoryInputTableActive')
        })
        submitCategory.addEventListener('click', createNewCategory)
        cancelCategoryInput.addEventListener('click', () => {
            categoryInputTable.classList.remove('categoryInputTableActive')
            categoryInputTable.classList.add('categoryInputTable')
            categoryInputField.value = ''
        })
    }
    setCategoryListeners()

    function identifyActiveCategory(){
        let activeCategory = categoryCollection.find(element => element.active === true);
        return activeCategory
    }
   
    return{setCategoryListeners, identifyActiveCategory, categoryCollection}
})()

const addTaskListeners = () => {
        const addTaskButton = document.getElementById('addTaskButton')
        const submitButton = document.getElementById('submitButton')
        const cancelInputButton = document.getElementById('cancelButton')
        const importanceButton = document.getElementById('importanceButton')
        const dateButton = document.getElementById('dateButton')
        addTaskButton.addEventListener('click', displayTaskInputForm)
        submitButton.addEventListener('click', setNewTaskValues)
        //submitButton.addEventListener('click', setEditedTaskValue)
        cancelInputButton.addEventListener('click', cancelTaskInput)
        let deleteTaskIcons = Array.from(document.getElementsByClassName('deleteTaskIcon'))
        deleteTaskIcons.forEach(button => {
                button.addEventListener('click', deleteTask)
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


export {Category, addTaskListeners}


// let categoryCollection
// if (localStorage.getItem('categoryCollection')) {
// categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'))
// } else {
// categoryCollection = []
// }
// localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
// let data = JSON.parse(localStorage.getItem('categoryCollection'));






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