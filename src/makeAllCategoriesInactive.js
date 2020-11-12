import {Category} from './index.js'

const makeAllCategoriesInactive = () =>{
    Category.categoryCollection.forEach(category => {
        category.active = false
    })
}

export {makeAllCategoriesInactive}