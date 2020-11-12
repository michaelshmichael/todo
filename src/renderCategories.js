import {Category} from './index.js'

const renderCategories = () => {
    let counter = 0
    bottomLeftCategoryContainer.textContent = ''
    Category.categoryCollection.forEach(category => {
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
    Category.setCategoryListeners()
}

export {renderCategories}