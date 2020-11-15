import {addCategoryListeners} from './index.js'
import {toDoCategory} from './classConstructor'
import {makeAllCategoriesInactive} from './makeAllCategoriesInactive.js'

const createNewCategory = () => {
    let categoryCollection
        if (localStorage.getItem('categoryCollection')) {
            categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'))
        } else {
            categoryCollection = []
        }
        
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
        addCategoryListeners()
        localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
    }
    makeAllCategoriesInactive()
    categoryInputField.value = ''
}

export {createNewCategory}