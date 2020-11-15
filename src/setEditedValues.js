import {renderTasks} from './renderTasks.js'
import {displayCurrentValues} from './displayCurrentValues.js'


const setEditedValues = () => {
    let taskToEdit = displayCurrentValues(e)
    let categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'))
    const inputTable = document.querySelector('.inputTableActive')
    const inputTableContainer = document.getElementById('inputTableContainerActive')
    const submitButton = document.getElementById('submitButton')
    let taskID = taskToEdit.id
    let dueDateValue = document.getElementById('dueDate').value
    // let priorityValue
    // if (document.getElementById('highPriority').checked) {
    //     priorityValue = 1
    // } else if (document.getElementById('mediumPriority').checked) {
    //     priorityValue = 2
    // } else if (document.getElementById('lowPriority').checked){
    //     priorityValue = 3
    // }
    let notesValue = document.getElementById('notes').value

    taskToEdit.id = taskID
    taskToEdit.dueDate = dueDateValue
    // taskToEdit.priority = priorityValue
    taskToEdit.checklist = false
    taskToEdit.notes = notesValue
    localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
    inputTable.classList.add('inputTable')
    inputTable.classList.remove('inputTableActive')
    inputTableContainer.setAttribute('id', 'inputTableContainer')
    //submitButton.addEventListener('click', setNewTaskValues)
    renderTasks()
}

export {setEditedValues}