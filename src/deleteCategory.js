 
import {Tasks} from './task.js'

const deleteCategory = (e) => {
    if (confirm("Delete Category?")) {   
        document.querySelectorAll('.tasksDisplay .completedTasksDisplay').forEach(task => task.remove());
        const index = e.target.dataset.index;
        categoryCollection.splice(index, 1)
        localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
        renderCategories()
        Tasks.renderTasks()
    } 
}

export default deleteCategory
