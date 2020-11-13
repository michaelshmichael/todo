class toDoCategory {
    constructor(id, tasks){
        this.id = id;
        this.tasks = tasks;
        this.active = false;
    }
}

class task {
    constructor(id, dueDate, priority, checklist, notes){
        this.id = id;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = false;
        this.notes = notes;
    }
}
export {toDoCategory, task}
