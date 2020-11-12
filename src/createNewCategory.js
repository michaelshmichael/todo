import {setCategoryListeners} from './setCategoryListeners.js'
import {Category} from './index.js'
import {toDoCategory} from './categoryClass'

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
        Category.renderCategories()
        setCategoryListeners()
        localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
    }
    Category.makeAllCategoriesInactive()
}

export {createNewCategory}