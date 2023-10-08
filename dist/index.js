"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taskManager_1 = require("./taskManager");
const task_1 = require("./task");
const tasks = [new task_1.PersonalTasks('Tache perso'),
    new task_1.ProjectTasks('Tache projet'),
    new task_1.UrgentTasks('Tache urgente')];
tasks.forEach((task) => {
    //Création de trois tâches
    taskManager_1.TaskManager.getInstance().addTask(task);
});
// Supprime la première tâche
taskManager_1.TaskManager.getInstance().closeTask(tasks[0]);
console.log(tasks);
const task = new task_1.SimpleTask("Tâche principale");
const taskWithNote = new task_1.notesDecorator(task, "Ajoutez votre note ici.");
console.log(taskWithNote.name()); // Affiche: "Tâche principale"
console.log(taskWithNote.getNote());
//# sourceMappingURL=index.js.map