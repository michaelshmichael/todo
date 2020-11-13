import {makeAllCategoriesInactive} from './makeAllCategoriesInactive.js'
import {renderTasks} from './renderTasks.js'
import {getCategoryCollection} from './localStorage.js'

const setActiveCategory = (e) => {
    let displayedCategories = Array.from(document.getElementsByClassName('newCategory'));
    displayedCategories.forEach(category => {
        category.classList.remove('activeCategory')
    })
    let selectedCategoryNum = e.target.id
    let activeCategory = displayedCategories[selectedCategoryNum]
    activeCategory.classList.add('activeCategory')
    makeAllCategoriesInactive()
    getCategoryCollection()[selectedCategoryNum].active = true
    //localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
    renderTasks(); 
}

export {setActiveCategory}