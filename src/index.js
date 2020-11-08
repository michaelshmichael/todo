let categoryCollection = []
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
        let newCategoryName = prompt('Name of your category')
        if (newCategoryName === "") {
            alert('Please Enter a Value')
        } else if (newCategoryName) {
            let newCategory = new toDoCategory(newCategoryName, [])
            categoryCollection.push(newCategory)
            renderCategories()
            setCategoryListeners()
        }
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

    function setActiveCategory(e){
        let displayedCategories = Array.from(document.getElementsByClassName('newCategory'));
        displayedCategories.forEach(category => {
            category.classList.remove('activeCategory')
        })
        let selectedCategoryNum = e.target.id
        let activeCategory = displayedCategories[selectedCategoryNum]
        activeCategory.classList.add('activeCategory')

        categoryCollection.forEach(category => {
            category.active = false
        })
        categoryCollection[selectedCategoryNum].active = true
        Tasks.renderTasks();
    }

    function identifyActiveCategory(){
        let activeCategory = categoryCollection.find(element => element.active === true);
        return activeCategory
    }

    function deleteCategory(e) {
        if (confirm("Delete Category?") == true) {   
            document.querySelectorAll('.tasksDisplay').forEach(task => task.remove());
            const index = e.target.dataset.index;
            categoryCollection.splice(index, 1)
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
        if(categoryCollection.length > 0){
            //SHOULD HAVE CHECK FOR ACTIVE CATEGORY
            addTaskButton.addEventListener('click', displayTaskInputForm)
        }
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
    }
    addTaskListeners()

    function displayTaskInputForm(e){
        const newTaskInput = document.getElementById('taskInputField').value
        e.preventDefault();
        if(newTaskInput === ''){
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
            priorityValue = 'High'
        } else if (document.getElementById('mediumPriority').checked) {
            priorityValue = 'Medium'
        } else if (document.getElementById('lowPriority').checked){
            priorityValue = 'Low'
        }
        let notesValue = document.getElementById('notes').value
        let newTask = new task (taskID, dueDateValue, priorityValue, false, notesValue)
    
        addTaskToActiveCategory(newTask)
    }

    function addTaskToActiveCategory(newTask) {
        Category.identifyActiveCategory().tasks.push(newTask)
        inputTable.classList.remove('inputTableActive')
        inputTableContainer.setAttribute('id', 'inputTableContainer')
        renderTasks()
    }

    function renderTasks() {
        let counter = 0
        document.querySelectorAll('.tasksDisplay').forEach(e => e.remove());
        let activeCategory = categoryCollection.find(element => element.active === true);
        let activeCategoryTasks = activeCategory.tasks
        activeCategoryTasks.forEach(task => {
            let tasksDisplay = document.createElement('p');
            tasksDisplay.setAttribute('class', 'tasksDisplay')
            tasksDisplay.textContent = `${task.id} Due: ${task.dueDate} Notes: ${task.notes}` 
            bottomRightContainer.appendChild(tasksDisplay)
            console.log(`${task.priority}`)
            let priorityIndicator = document.createElement('div')
                if(task.priority == "High"){
                    priorityIndicator.classList.add('highPriorityIndicator')
                } else if (task.priority == "Medium"){
                    priorityIndicator.classList.add('mediumPriorityIndicator')
                } else if (task.priority == "Low"){
                    priorityIndicator.classList.add('lowPriorityIndicator')
                }
                tasksDisplay.appendChild(priorityIndicator)

            let deleteTaskButton = document.createElement('i')
            deleteTaskButton.setAttribute('class', 'fa fa-trash deleteTaskIcon')
            deleteTaskButton.setAttribute('data-index', `${counter}`)
            tasksDisplay.appendChild(deleteTaskButton)
            counter ++
        })
        counter = 0
        addTaskListeners()
    }
   
    function deleteTask(e) { 
        if (confirm("Delete Task?") == true) { 
            const activeCategory = categoryCollection.find(element => element.active === true);
            const index = e.target.dataset.index
            activeCategory.tasks.splice(index, 1)
            renderTasks()
        }
    }

    return {renderTasks}
})()



    // const checkActiveCategory = () => {
    //     if(topRightContainer.textContent === ''){
    //         alert('Please Select Category')
    //     } else {
    //         displayTaskInputForm
    //     }
    // }

    
    


    


    
    




