import {Category, Tasks} from './index.js'
import {task} from './taskClass.js'

const createANewTask = () => {
    
    const displayTaskInputForm = (e) => {
        const newTaskInput = document.getElementById('taskInputField').value
        e.preventDefault();
        if (Category.identifyActiveCategory() === undefined){
            alert('Please Select a Category')
        } else if(newTaskInput === ''){
            alert('Please Enter a Value')
        } else if (newTaskInput){
            let taskTitleForm = document.getElementById('taskTitleForm')
            Tasks.taskCreationDOM.inputTable.classList.remove('inputTable')
            Tasks.taskCreationDOM.inputTable.classList.add('inputTableActive')
            Tasks.taskCreationDOM.inputTableContainer.setAttribute('id', 'inputTableContainerActive')
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
        Category.identifyActiveCategory().tasks.push(newTask)
        Tasks.taskCreationDOM.inputTable.classList.remove('inputTableActive')
        Tasks.taskCreationDOM.inputTableContainer.setAttribute('id', 'inputTableContainer')
        //localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
        Tasks.resetTaskInputValues()
        Tasks.renderTasks()
    }

    return {displayTaskInputForm, setNewTaskValues}
}

export {createANewTask}