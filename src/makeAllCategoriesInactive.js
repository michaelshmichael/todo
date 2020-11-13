import {getCategoryCollection} from './localStorage.js'

const makeAllCategoriesInactive = () =>{
    getCategoryCollection().forEach(category => {
        category.active = false
    })
}

export {makeAllCategoriesInactive}