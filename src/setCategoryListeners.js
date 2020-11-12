import {Category} from './index.js'

const setCategoryListeners = () =>{
    const displayCategoryInput = document.getElementById('addCategoryButton')
    const categoryInputTable = document.querySelector('.categoryInputTable')
    const categoryInputField = document.getElementById('categoryInputField')
    const submitCategory = document.getElementById('submitCategory')
    const cancelCategoryInput = document.getElementById('cancelCategoryInput')
    let categories = Array.from(document.getElementsByClassName('newCategory'))
    let deleteCategoryIcons = Array.from(document.getElementsByClassName('deleteCategoryIcon'))
    categories.forEach(category => {
        category.addEventListener('click', Category.displayCategoryHeading)
        category.addEventListener('click', Category.setActiveCategory)
    })
    
    deleteCategoryIcons.forEach(button => {
        button.addEventListener('click', Category.deleteCategory)
    })
    displayCategoryInput.addEventListener('click', () => {
        categoryInputTable.classList.remove('categoryInputTable')
        categoryInputTable.classList.add('categoryInputTableActive')
    })
    submitCategory.addEventListener('click', Category.createNewCategory)
    cancelCategoryInput.addEventListener('click', () => {
        categoryInputTable.classList.remove('categoryInputTableActive')
        categoryInputTable.classList.add('categoryInputTable')
        categoryInputField.value = ''
    })
}

export {setCategoryListeners}