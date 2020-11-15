import {addCategoryListeners} from './index.js'
import {makeAllCategoriesInactive} from './makeAllCategoriesInactive.js';
import {renderTasks} from './renderTasks.js';

const deleteCategory = (e) => {
    if (confirm("Delete Category?")) {
        let categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'))
        document.querySelectorAll('.tasksDisplay .completedTasksDisplay').forEach(task => task.remove());
        const index = e.target.dataset.index;
        categoryCollection.splice(index, 1)
        localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection))
    }
    makeAllCategoriesInactive()
    addCategoryListeners()
    renderTasks()
}
export {deleteCategory}