"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
//Singleton
class TaskManager {
    constructor() {
        this.tasks = [];
    }
    static getInstance() {
        if (!TaskManager.instance) {
            TaskManager.instance = new TaskManager;
        }
        return TaskManager.instance;
    }
    // Méthode pour ajouter une tâche
    addTask(Task) {
        this.tasks.push(Task);
        console.log("Tache ajoutée : " + Task.name());
    }
    // Méthode pour fermer une tâche
    closeTask(taskToDelete) {
        const indexDelete = this.tasks.findIndex(task => task.name === taskToDelete.name);
        this.tasks.splice(indexDelete, 1);
        console.log("Tache supprimée : " + taskToDelete.name);
    }
}
exports.TaskManager = TaskManager;
//# sourceMappingURL=taskManager.js.map