import {Category} from './index.js'
import {makeAllCategoriesInactive} from './makeAllCategoriesInactive.js'
import {renderTasks} from './renderTasks.js'

const setActiveCategory = (e) => {
    let displayedCategories = Array.from(document.getElementsByClassName('newCategory'));
    displayedCategories.forEach(category => {
        category.classList.remove('activeCategory')
    })
    let selectedCategoryNum = e.target.id
    let activeCategory = displayedCategories[selectedCategoryNum]
    activeCategory.classList.add('activeCategory')
    makeAllCategoriesInactive()
    Category.categoryCollection[selectedCategoryNum].active = true
    //localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
    renderTasks(); 
}


export {setActiveCategory}