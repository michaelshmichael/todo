import {addCategoryListeners} from './index.js'

const renderCategories = () => {
    let categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'));
    let counter = 0
    bottomLeftCategoryContainer.textContent = ''
    categoryCollection.forEach(category => {
        let newCategoryContainer = document.createElement('p')
        newCategoryContainer.classList.add('newCategory')
        newCategoryContainer.textContent = category.id
        bottomLeftCategoryContainer.appendChild(newCategoryContainer)
        newCategoryContainer.setAttribute('id', `${counter}`)
        newCategoryContainer.setAttribute('data-index', `${counter}`)

        let deleteCategoryIcon = document.createElement('i')
        deleteCategoryIcon.setAttribute('class', 'fa fa-trash deleteCategoryIcon')
        deleteCategoryIcon.setAttribute('data-index', `${counter}`)
        newCategoryContainer.appendChild(deleteCategoryIcon)
        counter ++
    })
    counter = 0
    addCategoryListeners()
}

export {renderCategories}