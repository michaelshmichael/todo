import {Category} from './index.js'
import {renderTasks} from './renderTasks.js'

const orderTasksByDate = () => {
    console.log('order by date')
    let activeCategory = Category.categoryCollection.find(element => element.active === true);
    let activeCategoryTasks = activeCategory.tasks
    activeCategoryTasks.sort(function(a,b){
        return a.dueDate > b.dueDate ? 1 : a.dueDate < b.dueDate ? -1 : 0;
    })
    //localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
    renderTasks()
}

export {orderTasksByDate}