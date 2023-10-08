"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrgentTasks = exports.PersonalTasks = exports.ProjectTasks = exports.notesDecorator = exports.SimpleTask = void 0;
class SimpleTask {
    constructor(taskName) {
        this.taskName = taskName;
    }
    name() {
        return this.taskName;
    }
    ;
}
exports.SimpleTask = SimpleTask;
// Decorator
class notesDecorator extends SimpleTask {
    constructor(tasks, note) {
        super(tasks.name());
        this.tasks = tasks;
        this.note = note;
        this.task = tasks;
        this.taskNote = note;
    }
    name() {
        return this.task.name();
    }
    getNote() {
        return "Notes : " + this.note;
    }
}
exports.notesDecorator = notesDecorator;
class ProjectTasks {
    constructor(taskName) {
        this.taskName = taskName;
    }
    // Implémentation de la méthode de l'interface Task
    name() {
        return this.taskName;
    }
    // Méthode pour ajouter une tâche
    addTask(task) {
        console.log("Tache ajoutée : " + task.name());
    }
}
exports.ProjectTasks = ProjectTasks;
class PersonalTasks {
    constructor(taskName) {
        this.taskName = taskName;
    }
    // Implémentation de la méthode de l'interface Task
    name() {
        return this.taskName;
    }
    // Méthode pour ajouter une tâche
    addTask(task) {
        console.log("Tache ajoutée : " + task.name());
    }
}
exports.PersonalTasks = PersonalTasks;
class UrgentTasks {
    constructor(taskName) {
        this.taskName = taskName;
    }
    // Implémentation de la méthode de l'interface Task
    name() {
        return this.taskName;
    }
    // Méthode pour ajouter une tâche
    addTask(task) {
        console.log("Tache ajoutée : " + task.name());
    }
}
exports.UrgentTasks = UrgentTasks;
//# sourceMappingURL=task.js.map