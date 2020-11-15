const editTasks = () => {

}




  //HERE ARE EDITING FUCTIONS HIDDEN
    // function editTaskContent(e) {
    //     let editNumber = e.target.dataset.index
    //     let activeCategory = categoryCollection.find(element => element.active === true);
    //     let taskToEdit = activeCategory.tasks[editNumber]

    //     inputTable.classList.remove('inputTable')
    //     inputTable.classList.add('inputTableActive')
    //     inputTableContainer.setAttribute('id', 'inputTableContainerActive')

    //     let taskTitleForm = document.getElementById('taskTitleForm')
    //     let dueDateForm = document.getElementById('dueDate')
    //     let notes = document.getElementById('notes')
    //     let highPriority = document.getElementById('highPriority')
    //     let mediumPriority = document.getElementById('mediumPriority')
    //     let lowPriority = document.getElementById('lowPriority')

    //     taskTitleForm.textContent = `Edit details For ${taskToEdit.id}` 
    //     dueDateForm.value = `${taskToEdit.dueDate}`
    //     notes.textContent = `${taskToEdit.notes}`

    //     if (`${taskToEdit.priority}` == 1) {
    //         highPriority.setAttribute('checked', 'x')
    //     } else if (`${taskToEdit.priority}` == 2) {
    //         mediumPriority.setAttribute('checked', 'x')
    //     } else {
    //         lowPriority.setAttribute('checked', 'x')
    //     }
        
    //     return taskToEdit
    // }    

    // function setEditedTaskValue(){
    //     let taskToEdit = editTaskContent()
    //     let taskID = taskToEdit.id
    //     let dueDateValue = document.getElementById('dueDate').value
    //     let priorityValue
    //     if (document.getElementById('highPriority').checked) {
    //         priorityValue = 1
    //     } else if (document.getElementById('mediumPriority').checked) {
    //         priorityValue = 2
    //     } else if (document.getElementById('lowPriority').checked){
    //         priorityValue = 3
    //     }
    //     let notesValue = document.getElementById('notes').value
    //     let newTask = new task (taskID, dueDateValue, priorityValue, false, notesValue)

    //     let activeCategory = categoryCollection.find(element => element.active === true);
    //     let index = activeCategory.indexOf(taskToEdit)
    //     console.log(index)
    //     activeCategory.tasks.splice(index, 1)
    //     //localStorage.setItem('categoryCollection', JSON.stringify(categoryCollection));
    //     addTaskToActiveCategory(newTask)
    // }