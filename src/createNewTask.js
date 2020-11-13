import {Category} from './index.js'
import {task} from './classConstructor.js'
import {renderTasks} from './renderTasks.js'

const inputTable = document.querySelector('.inputTable')
const inputTableContainer = document.getElementById('inputTableContainer')
const taskTitleForm = document.getElementById('taskTitleForm')

const displayTaskInputForm = (e) => {
    const newTaskInput = document.getElementById('taskInputField').value
    e.preventDefault();
    if (_identifyActiveCategory() === undefined){
        alert('Please Select a Category')
    } else if(newTaskInput === ''){
        alert('Please Enter a Value')
    } else if (newTaskInput){
    inputTable.classList.remove('inputTable')
    inputTable.classList.add('inputTableActive')
    inputTableContainer.setAttribute('id', 'inputTableContainerActive')
    taskTitleForm.textContent = `Details For ${newTaskInput}` 
    }
}

const setNewTaskValues = () => {
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
    _addTaskToActiveCategory(newTask)
}

const _addTaskToActiveCategory = (newTask) => {
    _identifyActiveCategory().tasks.push(newTask)
    inputTable.classList.remove('inputTableActive')
    inputTableContainer.setAttribute('id', 'inputTableContainer')
    //localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
    _resetTaskInputValues()
    renderTasks()
}

const cancelTaskInput = () => {
    inputTable.classList.remove('inputTableActive')
    inputTable.classList.add('inputTable')
    inputTableContainer.setAttribute('id', 'inputTableContainer')
    _resetTaskInputValues()
}

function _resetTaskInputValues (){
    let taskID = document.getElementById('taskInputField')
    let dueDate = document.getElementById('dueDate')
    let notes = document.getElementById('notes')
    taskID.value = ''
    dueDate.value = ''
    notes.value = ''
}

function _identifyActiveCategory(){
    let activeCategory = Category.categoryCollection.find(element => element.active === true);
    return activeCategory
}

export {displayTaskInputForm, setNewTaskValues, cancelTaskInput}
