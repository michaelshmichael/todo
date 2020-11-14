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
    
const deleteTask = (e) => {
    let categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'))
    let activeCategory = categoryCollection.find(element => element.active === true);
    if (confirm("Delete Task?")) { 
        
        const index = e.target.dataset.index
        activeCategory.tasks.splice(index, 1)
        localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
        renderTasks()
    }
}

export {setTaskAsComplete, deleteTask}