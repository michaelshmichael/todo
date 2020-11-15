import {renderCategories} from './renderCategories.js'
import {displayCategoryHeading} from './displayCategoryHeading.js'
import {createNewCategory} from './createNewCategory.js'
import {makeAllCategoriesInactive} from './makeAllCategoriesInactive.js'
import {setActiveCategory} from './setActiveCategory.js'
import {deleteCategory} from './deleteCategory.js'

import {displayTaskInputForm} from './createNewTask.js'
import {setNewTaskValues} from './createNewTask.js'
import {cancelTaskInput} from './createNewTask.js'
import {setTaskAsComplete} from './setTaskAsComplete.js'
import {deleteTask} from './deleteTask.js'

import {orderTasksByImportance} from './reorderTasks.js'
import {orderTasksByDate} from './reorderTasks.js'


const addCategoryListeners = () =>{
    const displayCategoryInput = document.getElementById('addCategoryButton')
    const categoryInputTable = document.querySelector('.categoryInputTable')
    const categoryInputField = document.getElementById('categoryInputField')
    const submitCategory = document.getElementById('submitCategory')
    const cancelCategoryInput = document.getElementById('cancelCategoryInput')
    let categories = Array.from(document.getElementsByClassName('newCategory'))
    categories.forEach(category => {
        category.addEventListener('click', displayCategoryHeading)
        category.addEventListener('click', makeAllCategoriesInactive)
        category.addEventListener('click', setActiveCategory)
    })
    let deleteCategoryIcons = Array.from(document.getElementsByClassName('deleteCategoryIcon'))
    deleteCategoryIcons.forEach(button => {
        button.addEventListener('click', deleteCategory)
        button.addEventListener('click', renderCategories)
    })
    displayCategoryInput.addEventListener('click', () => {
        categoryInputTable.classList.remove('categoryInputTable')
        categoryInputTable.classList.add('categoryInputTableActive')
    })
    submitCategory.addEventListener('click', createNewCategory)
    submitCategory.addEventListener('click', renderCategories)
    cancelCategoryInput.addEventListener('click', () => {
        categoryInputTable.classList.remove('categoryInputTableActive')
        categoryInputTable.classList.add('categoryInputTable')
        categoryInputField.value = ''
    })
}
addCategoryListeners()

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

renderCategories()
makeAllCategoriesInactive()

export {addCategoryListeners, addTaskListeners}




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