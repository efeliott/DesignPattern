"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrgentTasks = exports.PersonalTasks = exports.ProjectTasks = void 0;
class SimpleTask {
}
// Decorator
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