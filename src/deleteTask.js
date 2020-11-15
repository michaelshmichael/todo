import {renderTasks} from './renderTasks.js'
    
const deleteTask = e => {
    let categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'))
    let activeCategory = categoryCollection.find(element => element.active === true);
    if (confirm("Delete Task?")) { 
        const index = e.target.dataset.index
        activeCategory.tasks.splice(index, 1)
        localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
        renderTasks()
    }
}

export {deleteTask}