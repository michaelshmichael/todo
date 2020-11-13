
import {Category} from './index.js'
import {renderTasks} from './renderTasks.js'

const orderTasksByImportance = () => {
        console.log('order by importance')
        let activeCategory = Category.categoryCollection.find(element => element.active === true);
        let activeCategoryTasks = activeCategory.tasks
        activeCategoryTasks.sort(function(a,b){ 
            return a.priority > b.priority ? 1 : a.priority < b.priority ? -1 : 0;
        })
    
        //localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection)); 
        renderTasks()  
}

export {orderTasksByImportance}
