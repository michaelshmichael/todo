import Tasks from './task.js'

const Category = (() => {

    let categoryCollection
    if (localStorage.getItem('categoryCollection')) {
    categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'))
    } else {
    categoryCollection = []
    }
    localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
    let data = JSON.parse(localStorage.getItem('categoryCollection'));

    class toDoCategory {
        constructor(id, tasks){
            this.id = id;
            this.tasks = tasks;
            this.active = false;
        }
    }

    function setCategoryListeners(){
        const displayCategoryInput = document.getElementById('addCategoryButton')
        const categoryInputTable = document.querySelector('.categoryInputTable')
        const categoryInputField = document.getElementById('categoryInputField')
        const submitCategory = document.getElementById('submitCategory')
        const cancelCategoryInput = document.getElementById('cancelCategoryInput')
        let categories = Array.from(document.getElementsByClassName('newCategory'))
        let deleteCategoryIcons = Array.from(document.getElementsByClassName('deleteCategoryIcon'))
        categories.forEach(category => {
            category.addEventListener('click', displayCategoryHeading)
            category.addEventListener('click', setActiveCategory)
        })
        deleteCategoryIcons.forEach(button => {
            button.addEventListener('click', deleteCategory)
        })
        displayCategoryInput.addEventListener('click', () => {
            categoryInputTable.classList.remove('categoryInputTable')
            categoryInputTable.classList.add('categoryInputTableActive')
        })
        submitCategory.addEventListener('click', createNewCategory)
        cancelCategoryInput.addEventListener('click', () => {
            categoryInputTable.classList.remove('categoryInputTableActive')
            categoryInputTable.classList.add('categoryInputTable')
            categoryInputField.value = ''
        })
    }
    setCategoryListeners()

    function createNewCategory() {
        const categoryInputTable = document.querySelector('.categoryInputTableActive')
        let categoryInputField = document.getElementById('categoryInputField')
        let newCategoryName = categoryInputField.value
        if (newCategoryName === "") {
            alert('Please Enter a Value')
        } else if (newCategoryName) {
            let newCategory = new toDoCategory(newCategoryName, [])
            console.log(newCategory)
            categoryCollection.push(newCategory)
            categoryInputTable.classList.remove('categoryInputTableActive')
            categoryInputTable.classList.add('categoryInputTable')
            renderCategories()
            setCategoryListeners()
            localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
        }
        makeAllCategoriesInactive()
    }
    
    function displayCategoryHeading(e) {
        topRightContainer.textContent = '';
        let selectedCategory = e.target.id
        let categoryDisplay = document.createElement('h1')
        categoryDisplay.textContent = categoryCollection[selectedCategory].id
        categoryDisplay.setAttribute('id', 'categoryHeading')
        topRightContainer.appendChild(categoryDisplay);
    }

    function renderCategories() {
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
        setCategoryListeners()
    }
    renderCategories(data)

    function setActiveCategory(e){
        let displayedCategories = Array.from(document.getElementsByClassName('newCategory'));
        displayedCategories.forEach(category => {
            category.classList.remove('activeCategory')
        })
        let selectedCategoryNum = e.target.id
        let activeCategory = displayedCategories[selectedCategoryNum]
        activeCategory.classList.add('activeCategory')

        makeAllCategoriesInactive()
        categoryCollection[selectedCategoryNum].active = true
        localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
        Tasks.renderTasks(); 
    }

    function makeAllCategoriesInactive(){
        categoryCollection.forEach(category => {
            category.active = false
        })
    }
    makeAllCategoriesInactive()

    function identifyActiveCategory(){
        let activeCategory = categoryCollection.find(element => element.active === true);
        return activeCategory
    }
    
    function deleteCategory(e) {
        if (confirm("Delete Category?")) {   
            document.querySelectorAll('.tasksDisplay .completedTasksDisplay').forEach(task => task.remove());
            const index = e.target.dataset.index;
            categoryCollection.splice(index, 1)
            localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
            renderCategories()
            Tasks.renderTasks()
        } 
    }

    return{identifyActiveCategory, setCategoryListeners}
})()

export default Category