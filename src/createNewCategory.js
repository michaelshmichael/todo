import {Category} from './index.js'
import {toDoCategory} from './classConstructor'
import {renderCategories} from './renderCategories.js'
import {makeAllCategoriesInactive} from './makeAllCategoriesInactive.js'
import {getCategoryCollection} from './localStorage.js'

const createNewCategory = () => {
    let categoryCollection = getCategoryCollection()
    const categoryInputTable = document.querySelector('.categoryInputTableActive')
    let categoryInputField = document.getElementById('categoryInputField')
    let newCategoryName = categoryInputField.value
    if (newCategoryName === "") {
        alert('Please Enter a Value')
    } else if (newCategoryName) {
        let newCategory = new toDoCategory(newCategoryName, [])
        categoryCollection.push(newCategory)
        categoryInputTable.classList.remove('categoryInputTableActive')
        categoryInputTable.classList.add('categoryInputTable')
        Category.setCategoryListeners()
        localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
    }
    renderCategories()
    makeAllCategoriesInactive()
    categoryInputField.value = ''
}

export {createNewCategory}