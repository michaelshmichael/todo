import {renderCategories} from './renderCategories.js'
import {Category} from './index.js'
import {renderTasks} from './renderTasks.js'
import {getCategoryCollection} from './localStorage.js'

const deleteCategory = (e) => {
    if (confirm("Delete Category?")) {   
        document.querySelectorAll('.tasksDisplay .completedTasksDisplay').forEach(task => task.remove());
        const index = e.target.dataset.index;
        getCategoryCollection.splice(index, 1)
        //localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
        renderCategories()
        Category.setCategoryListeners()
        renderTasks()
    } 
}

export {deleteCategory}