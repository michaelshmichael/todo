const getCategoryCollection = () => {
    let categoryCollection
    if (localStorage.getItem('categoryCollection')) {
        categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'))
    } else {
        categoryCollection = []
    }
    return categoryCollection
}

//localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection);
//let data = JSON.parse(localStorage.getItem('categoryCollection'));

export {getCategoryCollection}