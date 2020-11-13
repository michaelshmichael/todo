import {renderTasks} from './renderTasks.js'
import {getCategoryCollection} from './localStorage.js'

const setTaskAsComplete = (e) => {
    let checkboxNumber = e.target.dataset.index
    let activeCategory = getCategoryCollection().find(element => element.active === true);
    let completedTask = activeCategory.tasks[checkboxNumber]
    if(completedTask.checklist) {
        completedTask.checklist = false
    } else {
        completedTask.checklist = true
    }
    //localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection)); 
    renderTasks()  
}
    
const deleteTask = (e) => { 
    if (confirm("Delete Task?")) { 
        const activeCategory = getCategoryCollection().find(element => element.active === true);
        const index = e.target.dataset.index
        activeCategory.tasks.splice(index, 1)
        //localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
        renderTasks()
    }
}

export {setTaskAsComplete, deleteTask}