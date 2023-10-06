"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrgentTasks = exports.PersonalTasks = exports.ProjectTasks = void 0;
// Decorator
// export class TaskDecorator implements Task {
//     name: string;
//     protected notes: Task;
//     protected labels: Task;
//     protected priorities: Task;
//     constructor(notes: Task, labels: Task, priorities: Task){
//         this.notes = notes;
//         this.labels = labels;
//         this.priorities = priorities;
//     }
//     // Méthode pour ajouter une tâche
//     public addTask(Task : Task){
//         this.notes.addTask(this.notes);
//         this.notes.addTask(this.labels);
//         this.notes.addTask(this.priorities);
//         console.log("Tache mise à jour : " + Task.name);
//     }
// }
class ProjectTasks {
    constructor(name) {
        this.name = name;
    }
    // Méthode pour ajouter une tâche
    addTask(Task) {
        console.log("Tache ajoutée : " + Task.name);
    }
}
exports.ProjectTasks = ProjectTasks;
class PersonalTasks {
    constructor(name) {
        this.name = name;
    }
    // Méthode pour ajouter une tâche
    addTask(Task) {
        console.log("Tache ajoutée : " + Task.name);
    }
}
exports.PersonalTasks = PersonalTasks;
class UrgentTasks {
    constructor(name) {
        this.name = name;
    }
    // Méthode pour ajouter une tâche
    addTask(Task) {
        console.log("Tache ajoutée : " + Task.name);
    }
}
exports.UrgentTasks = UrgentTasks;
//# sourceMappingURL=task.js.map