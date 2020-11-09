let categoryCollection
if (localStorage.getItem('categoryCollection')) {
  categoryCollection = JSON.parse(localStorage.getItem('categoryCollection'))
} else {
  categoryCollection = []
}

localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
let data = JSON.parse(localStorage.getItem('categoryCollection'));

const Category = (() => {

    class toDoCategory {
        constructor(id, tasks){
            this.id = id;
            this.tasks = tasks;
            this.active = false;
        }
    }

    function setCategoryListeners(){
        const addCategoryButton = document.getElementById('addCategoryButton')
        let categories = Array.from(document.getElementsByClassName('newCategory'))
        let deleteCategoryIcons = Array.from(document.getElementsByClassName('deleteCategoryIcon'))
        categories.forEach(category => {
            category.addEventListener('click', displayCategoryHeading)
            category.addEventListener('click', setActiveCategory)
        })
        deleteCategoryIcons.forEach(button => {
            button.addEventListener('click', deleteCategory)
        })
        addCategoryButton.addEventListener('click', createNewCategory)
    }
    setCategoryListeners()

    function createNewCategory() {
        let newCategoryName = prompt('Write the name of your category')
        if (newCategoryName === "") {
            alert('Please Enter a Value')
        } else if (newCategoryName) {
            let newCategory = new toDoCategory(newCategoryName, [])
            categoryCollection.push(newCategory)
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

            let deleteCategoryButton = document.createElement('i')
            deleteCategoryButton.setAttribute('class', 'fa fa-trash deleteCategoryIcon')
            deleteCategoryButton.setAttribute('data-index', `${counter}`)
            newCategoryContainer.appendChild(deleteCategoryButton)
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
        if (confirm("Delete Category?") == true) {   
            document.querySelectorAll('.tasksDisplay').forEach(task => task.remove());
            const index = e.target.dataset.index;
            categoryCollection.splice(index, 1)
            localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
            renderCategories()
        } 
    }

    return{identifyActiveCategory}
})()


const Tasks = (() => {

    const addTaskButton = document.getElementById('addTaskButton')
    const submitButton = document.getElementById('submitButton')
    const cancelInputButton = document.getElementById('cancelButton')
    const inputTable = document.querySelector('.inputTable')
    const inputTableContainer = document.getElementById('inputTableContainer')
    const importanceButton = document.getElementById('importanceButton')
    const dateButton = document.getElementById('dateButton')
    
    class task {
        constructor(id, dueDate, priority, checklist, notes){
            this.id = id;
            this.dueDate = dueDate;
            this.priority = priority;
            this.checklist = false;
            this.notes = notes;
        }
    }

    function addTaskListeners(){
        addTaskButton.addEventListener('click', displayTaskInputForm)
        submitButton.addEventListener('click', setNewTaskValues)
        
        let deleteTaskIcons = Array.from(document.getElementsByClassName('deleteTaskIcon'))
        deleteTaskIcons.forEach(button => {
                button.addEventListener('click', deleteTask)
        })
        cancelInputButton.addEventListener('click', () =>{
            inputTable.classList.remove('inputTableActive')
            inputTable.classList.add('inputTable')
            inputTableContainer.setAttribute('id', 'inputTableContainer')
        })
        importanceButton.addEventListener('click', orderTasksByImportance)
        dateButton.addEventListener('click', orderTasksByDate)
    }
    addTaskListeners()

    function displayTaskInputForm(e){
        const newTaskInput = document.getElementById('taskInputField').value
        e.preventDefault();
        if (Category.identifyActiveCategory() === undefined){
            alert('Please Select a Category')
        } else if(newTaskInput === ''){
            alert('Please Enter a Value')
        } else if (newTaskInput){
        let taskTitleForm = document.getElementById('taskTitleForm')
        inputTable.classList.remove('inputTable')
        inputTable.classList.add('inputTableActive')
        inputTableContainer.setAttribute('id', 'inputTableContainerActive')
        taskTitleForm.textContent = `Details For ${newTaskInput}` 
        }  
    }
    
    function setNewTaskValues() {
        let taskID = document.getElementById('taskInputField').value
        let dueDateValue = document.getElementById('dueDate').value
        let priorityValue
        if (document.getElementById('highPriority').checked) {
            priorityValue = 1
        } else if (document.getElementById('mediumPriority').checked) {
            priorityValue = 2
        } else if (document.getElementById('lowPriority').checked){
            priorityValue = 3
        } else {
            alert('Please Select a Priority Level')
            setNewTaskValues()
        }
        let notesValue = document.getElementById('notes').value
        let newTask = new task (taskID, dueDateValue, priorityValue, false, notesValue)
        addTaskToActiveCategory(newTask)
    }

    function addTaskToActiveCategory(newTask) {
        //if(newTask.priorityValue == 1 || 2 || 3){
        Category.identifyActiveCategory().tasks.push(newTask)
        inputTable.classList.remove('inputTableActive')
        inputTableContainer.setAttribute('id', 'inputTableContainer')
        localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
        renderTasks()
    }

    function renderTasks() {
        let counter = 0
        document.querySelectorAll('.tasksDisplay').forEach(e => e.remove());
        let activeCategory = categoryCollection.find(element => element.active === true);
        let activeCategoryTasks = activeCategory.tasks
        activeCategoryTasks.forEach(task => {
            let tasksDisplay = document.createElement('div');
            tasksDisplay.setAttribute('class', 'tasksDisplay')
            let taskInfoContainer = document.createElement('div')
            taskInfoContainer.setAttribute('class', 'taskInfoContainer')
            bottomRightContainer.appendChild(tasksDisplay)
            
            let priorityIndicator = document.createElement('div')

                if(task.priority == 1){
                    priorityIndicator.classList.add('highPriorityIndicator')
                } else if (task.priority == 2){
                    priorityIndicator.classList.add('mediumPriorityIndicator')
                } else if (task.priority == 3){
                    priorityIndicator.classList.add('lowPriorityIndicator')
                }

            let taskNameAndDueDateContainer = document.createElement('div')
            taskNameAndDueDateContainer.setAttribute('class', 'taskNameAndDueDateContainer')

            let taskName = document.createElement('div')
            taskName.setAttribute('class', 'taskName')
            taskName.textContent = `${task.id}`

            let dueDate = document.createElement('div')
            dueDate.setAttribute('class', 'dueDate')
            dueDate.textContent = `Due: ${task.dueDate}`

            let notesContainer = document.createElement('div')
            notesContainer.setAttribute('class', 'notesContainer')

            let notesHeading = document.createElement('div')
            notesHeading.setAttribute('class', 'notesHeading')

            let notesContent = document.createElement('div')
            notesContent.setAttribute('class', 'notesContent')
            notesContent.textContent = `${task.notes}`

            tasksDisplay.appendChild(priorityIndicator)
            tasksDisplay.appendChild(taskInfoContainer)
            taskInfoContainer.appendChild(taskNameAndDueDateContainer)
            taskNameAndDueDateContainer.appendChild(taskName)
            taskNameAndDueDateContainer.appendChild(dueDate)
            taskInfoContainer.appendChild(notesContainer)
            notesContainer.appendChild(notesHeading)
            notesContainer.appendChild(notesContent)
            notesHeading.textContent = 'Notes'
            let deleteTaskButton = document.createElement('i')
            deleteTaskButton.setAttribute('class', 'fa fa-trash deleteTaskIcon')
            deleteTaskButton.setAttribute('data-index', `${counter}`)
            tasksDisplay.appendChild(deleteTaskButton)
            counter ++
        })
        counter = 0
        addTaskListeners()
    }

    function orderTasksByImportance() {
        console.log('order by importance')
        let activeCategory = categoryCollection.find(element => element.active === true);
        let activeCategoryTasks = activeCategory.tasks
        activeCategoryTasks.sort(function(a,b){ 
            return a.priority > b.priority ? 1 : a.priority < b.priority ? -1 : 0;
        })
    
        localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection)); 
        renderTasks()  
    }
   
    
    function orderTasksByDate() {
        console.log('order by date')
        let activeCategory = categoryCollection.find(element => element.active === true);
        let activeCategoryTasks = activeCategory.tasks
        activeCategoryTasks.sort(function(a,b){
            return a.dueDate > b.dueDate ? 1 : a.dueDate < b.dueDate ? -1 : 0;
        })
        localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
        renderTasks()
    }
    
   
    function deleteTask(e) { 
        if (confirm("Delete Task?") == true) { 
            const activeCategory = categoryCollection.find(element => element.active === true);
            const index = e.target.dataset.index
            activeCategory.tasks.splice(index, 1)
            localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
            renderTasks()
        }
    }
    return {renderTasks}
})()


    
    


    


    
    




