const addCategoryButton = document.getElementById('addCategoryButton')

class toDoCategory {
    constructor(id, tasks){
        this.id = id;
        this.tasks = tasks;
    }
}

const createNewCategory = () => {
    let newCatName = prompt('Name of your category');
    let newCat = new toDoCategory(newCatName, [4,6,5])
    console.log(newCat.id)
    console.log(newCat.tasks)
    let bottomLeftContainer = document.getElementById('bottomLeftContainer')

    let newCategoryContainer = document.createElement('p')
    newCategoryContainer.classList.add('newCategory')
    newCategoryContainer.textContent = newCat.id;
    bottomLeftContainer.appendChild(newCategoryContainer)

    let categories = Array.from(document.getElementsByClassName('newCategory'))

    categories.forEach(category => {
        category.addEventListener('click', renderTasks(newCat))
    })
    return{newCat}
}

const renderTasks = (newCat) => {
    let bottomRightContainer = document.getElementById('bottomRightContainer')
    let tasksDisplay = document.createElement('p');
    tasksDisplay.textContent = newCat.tasks

    bottomRightContainer.appendChild(tasksDisplay)
}



addCategoryButton.addEventListener('click', createNewCategory)


