import {addTaskListeners} from './index.js'
import {formatDistance} from 'date-fns'
import parseISO from 'date-fns/parseISO'

const renderTasks = () => {
    let categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'))
    let counter = 0
    document.querySelectorAll('.tasksDisplay').forEach(e => e.remove());
    document.querySelectorAll('.completedTasksDisplay').forEach(e => e.remove());
    let activeCategory = categoryCollection.find(element => element.active);
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
        let styledDate = formatDistance(parseISO(task.dueDate), new Date())
        dueDate.textContent = `Due: ${styledDate}`

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

export {renderTasks}