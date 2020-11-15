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
addTaskListeners()

renderCategories()
makeAllCategoriesInactive()

export {addCategoryListeners, addTaskListeners}


