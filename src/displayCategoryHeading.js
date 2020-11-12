import {Category} from './index.js'

const displayCategoryHeading = (e) => {
    topRightContainer.textContent = '';
    let selectedCategory = e.target.id
    let categoryDisplay = document.createElement('h1')
    categoryDisplay.textContent = Category.categoryCollection[selectedCategory].id
    categoryDisplay.setAttribute('id', 'categoryHeading')
    topRightContainer.appendChild(categoryDisplay);
}

export {displayCategoryHeading}