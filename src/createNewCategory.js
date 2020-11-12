import {setCategoryListeners} from './setCategoryListeners.js'
import {Category} from './index.js'
import {toDoCategory} from './categoryClass'
import {renderCategories} from './renderCategories.js'

const createNewCategory = () => {
    const categoryInputTable = document.querySelector('.categoryInputTableActive')
    let categoryInputField = document.getElementById('categoryInputField')
    let newCategoryName = categoryInputField.value
    if (newCategoryName === "") {
        alert('Please Enter a Value')
    } else if (newCategoryName) {
        let newCategory = new toDoCategory(newCategoryName, [])
        Category.categoryCollection.push(newCategory)
        categoryInputTable.classList.remove('categoryInputTableActive')
        categoryInputTable.classList.add('categoryInputTable')
        renderCategories()
        setCategoryListeners()
        //localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
    }
    Category.makeAllCategoriesInactive()
}

export {createNewCategory}