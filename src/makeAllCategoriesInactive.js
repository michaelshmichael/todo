import {getCategoryCollection} from './localStorage.js'

let categoryCollection = getCategoryCollection()

const makeAllCategoriesInactive = () =>{
    categoryCollection.forEach(category => {
        if(category.active){
            category.active = false
        }
        localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection))
    })
}

export {makeAllCategoriesInactive}