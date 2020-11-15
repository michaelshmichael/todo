import {renderTasks} from "./renderTasks";

const setActiveCategory = (e) => {
    let categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'))
    let displayedCategories = Array.from(document.getElementsByClassName('newCategory'));
    displayedCategories.forEach(category => {
        category.classList.remove('activeCategory')
    })
    let selectedCategoryNumber = e.target.id
    let activeCategory = displayedCategories[selectedCategoryNumber]
    activeCategory.classList.add('activeCategory')
    categoryCollection[selectedCategoryNumber].active = true
    localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
    renderTasks()
}

export {setActiveCategory}