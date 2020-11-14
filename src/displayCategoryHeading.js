const displayCategoryHeading = (e) => {
    let categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'))
    topRightContainer.textContent = '';
    let selectedCategory = e.target.id
    let categoryDisplay = document.createElement('h1')
    categoryDisplay.textContent = categoryCollection[selectedCategory].id
    categoryDisplay.setAttribute('id', 'categoryHeading')
    topRightContainer.appendChild(categoryDisplay);
}

export {displayCategoryHeading}