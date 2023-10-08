"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrgentTasks = exports.PersonalTasks = exports.ProjectTasks = exports.PrioritiesDecorator = exports.LabelsDecorator = exports.NotesDecorator = exports.SimpleTask = void 0;
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
// Decorator pour ajouter une note
class NotesDecorator extends SimpleTask {
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
exports.NotesDecorator = NotesDecorator;
// Decorator pour ajouter un label
class LabelsDecorator extends SimpleTask {
    constructor(tasks, label) {
        super(tasks.name());
        this.tasks = tasks;
        this.label = label;
        this.task = tasks;
        this.taskLabels = label;
    }
    name() {
        return this.task.name();
    }
    getLabel() {
        return "Label : " + this.label;
    }
}
exports.LabelsDecorator = LabelsDecorator;
class PrioritiesDecorator extends SimpleTask {
    constructor(tasks, prioritie) {
        super(tasks.name());
        this.tasks = tasks;
        this.prioritie = prioritie;
        this.task = tasks;
        this.taskPriorities = prioritie;
    }
    name() {
        return this.task.name();
    }
    getPriorities() {
        return "Priorities level : " + this.prioritie;
    }
}
exports.PrioritiesDecorator = PrioritiesDecorator;
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