import {renderTasks} from './renderTasks.js'

const setTaskAsComplete = e => {
    let categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'))
    let checkboxNumber = e.target.dataset.index
    let activeCategory = categoryCollection.find(element => element.active);
    let completedTask = activeCategory.tasks[checkboxNumber]
    completedTask.checklist ? completedTask.checklist = false : completedTask.checklist = true
    localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection)); 
    renderTasks()  
}

export {setTaskAsComplete}