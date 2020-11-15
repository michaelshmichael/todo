import {setNewTaskValues} from './createNewTask.js'
import {renderTasks} from './renderTasks.js'

const inputTable = document.querySelector('.inputTable')
const inputTableContainer = document.getElementById('inputTableContainer')
const submitButton = document.getElementById('submitButton')

const editCurrentValues = (e) => {
    
    let categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'))
    let editNumber = e.target.dataset.index
    let activeCategory = categoryCollection.find(element => element.active === true);
    let taskToEdit = activeCategory.tasks[editNumber]

    inputTable.classList.remove('inputTable')
    inputTable.classList.add('inputTableActive')
    inputTableContainer.setAttribute('id', 'inputTableContainerActive')

    let taskTitleForm = document.getElementById('taskTitleForm')
    let dueDateForm = document.getElementById('dueDate')
    let notes = document.getElementById('notes')
    let highPriority = document.getElementById('highPriority')
    let mediumPriority = document.getElementById('mediumPriority')
    let lowPriority = document.getElementById('lowPriority')

    taskTitleForm.textContent = `Edit details for ${taskToEdit.id}` 
    dueDateForm.value = `${taskToEdit.dueDate}`
    notes.value = `${taskToEdit.notes}`

    if (`${taskToEdit.priority}` == 1) {
        highPriority.setAttribute('checked', 'x')
    } else if (`${taskToEdit.priority}` == 2) {
        mediumPriority.setAttribute('checked', 'x')
    } else {
        lowPriority.setAttribute('checked', 'x')
    } 
    submitButton.addEventListener('click', function(){   
        let taskID = taskToEdit.id
        let dueDateValue = document.getElementById('dueDate').value
        let priorityValue
        if (document.getElementById('highPriority').checked) {
            priorityValue = 1
        } else if (document.getElementById('mediumPriority').checked) {
            priorityValue = 2
        } else if (document.getElementById('lowPriority').checked){
            priorityValue = 3
        }
        let notesValue = document.getElementById('notes').value

        taskToEdit.id = taskID
        taskToEdit.dueDate = dueDateValue
        taskToEdit.priority = priorityValue
        taskToEdit.checklist = false
        taskToEdit.notes = notesValue
        localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
        inputTable.classList.add('inputTable')
        inputTable.classList.remove('inputTableActive')
        inputTableContainer.setAttribute('id', 'inputTableContainer')
        
        renderTasks()
    })
}

export {editCurrentValues}