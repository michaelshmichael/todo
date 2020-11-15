const makeAllCategoriesInactive = () =>{
    let categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'))
    categoryCollection.forEach(category => {
        if(category.active){category.active = false}
        localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection))
    })
}

export {makeAllCategoriesInactive}