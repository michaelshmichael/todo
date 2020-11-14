import {renderTasks} from "./renderTasks";

const setActiveCategory = (e) => {
    let categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'))
    let displayedCategories = Array.from(document.getElementsByClassName('newCategory'));
    displayedCategories.forEach(category => {
        category.classList.remove('activeCategory')
    })
    let selectedCategoryNum = e.target.id
    let activeCategory = displayedCategories[selectedCategoryNum]
    activeCategory.classList.add('activeCategory')
    categoryCollection[selectedCategoryNum].active = true
    localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
    renderTasks()
}

export {setActiveCategory}