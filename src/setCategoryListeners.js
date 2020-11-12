import {Category} from './index.js'
import {createNewCategory} from './createNewCategory.js'
import {displayCategoryHeading} from './displayCategoryHeading.js'
import {deleteCategory} from './deleteCategory.js'

const setCategoryListeners = () =>{
    const displayCategoryInput = document.getElementById('addCategoryButton')
    const categoryInputTable = document.querySelector('.categoryInputTable')
    const categoryInputField = document.getElementById('categoryInputField')
    const submitCategory = document.getElementById('submitCategory')
    const cancelCategoryInput = document.getElementById('cancelCategoryInput')
    let categories = Array.from(document.getElementsByClassName('newCategory'))
    let deleteCategoryIcons = Array.from(document.getElementsByClassName('deleteCategoryIcon'))
    categories.forEach(category => {
        category.addEventListener('click', displayCategoryHeading)
        category.addEventListener('click', Category.setActiveCategory)
    })
    
    deleteCategoryIcons.forEach(button => {
        button.addEventListener('click', deleteCategory)
    })
    displayCategoryInput.addEventListener('click', () => {
        categoryInputTable.classList.remove('categoryInputTable')
        categoryInputTable.classList.add('categoryInputTableActive')
    })
    submitCategory.addEventListener('click', createNewCategory)
    cancelCategoryInput.addEventListener('click', () => {
        categoryInputTable.classList.remove('categoryInputTableActive')
        categoryInputTable.classList.add('categoryInputTable')
        categoryInputField.value = ''
    })
}

export {setCategoryListeners}