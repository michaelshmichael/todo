import {renderTasks} from './renderTasks.js'

const setTaskAsComplete = (e) => {
    let categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'))
    let checkboxNumber = e.target.dataset.index
    let activeCategory = categoryCollection.find(element => element.active);
    let completedTask = activeCategory.tasks[checkboxNumber]
    if(completedTask.checklist) {
        completedTask.checklist = false
    } else {
        completedTask.checklist = true
    }
    localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection)); 
    renderTasks()  
}

export {setTaskAsComplete}