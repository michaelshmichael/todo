import {renderCategories} from './renderCategories.js'
import {Category} from './index.js'
import {Tasks} from './index.js'

const deleteCategory = (e) => {
    if (confirm("Delete Category?")) {   
        document.querySelectorAll('.tasksDisplay .completedTasksDisplay').forEach(task => task.remove());
        const index = e.target.dataset.index;
        Category.categoryCollection.splice(index, 1)
        //localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
        renderCategories()
        Tasks.renderTasks()
    } 
}

export {deleteCategory}