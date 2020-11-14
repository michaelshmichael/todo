import {renderTasks} from './renderTasks.js'

const orderTasksByDate = () => {
    let categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'))
    let activeCategory = categoryCollection.find(element => element.active === true);
    let activeCategoryTasks = activeCategory.tasks
    activeCategoryTasks.sort(function(a,b){
        return a.dueDate > b.dueDate ? 1 : a.dueDate < b.dueDate ? -1 : 0;
    })
    localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
    renderTasks()
}

const orderTasksByImportance = () => {
    let categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'))
    let activeCategory = categoryCollection.find(element => element.active === true);
    let activeCategoryTasks = activeCategory.tasks
    activeCategoryTasks.sort(function(a,b){ 
        return a.priority > b.priority ? 1 : a.priority < b.priority ? -1 : 0;
    })
    localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection)); 
    renderTasks()  
}


export {orderTasksByDate, orderTasksByImportance}