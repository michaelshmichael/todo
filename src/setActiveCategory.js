import {Category, Tasks} from './index.js'

const setActiveCategory = (e) => {
    let displayedCategories = Array.from(document.getElementsByClassName('newCategory'));
    displayedCategories.forEach(category => {
        category.classList.remove('activeCategory')
    })
    let selectedCategoryNum = e.target.id
    let activeCategory = displayedCategories[selectedCategoryNum]
    activeCategory.classList.add('activeCategory')

    Category.makeAllCategoriesInactive()
    Category.categoryCollection[selectedCategoryNum].active = true
    //localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
    Tasks.renderTasks(); 
}

export {setActiveCategory}