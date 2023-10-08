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
const task = new task_1.SimpleTask("Tâche simple");
const taskWithNote = new task_1.NotesDecorator(task, "Test note");
const taskWithLabel = new task_1.LabelsDecorator(task, "Test label");
const taskWithPrioritie = new task_1.PrioritiesDecorator(task, 1);
console.log(taskWithNote.name());
console.log(taskWithNote.getNote());
console.log(taskWithLabel.name());
console.log(taskWithLabel.getLabel());
console.log(taskWithPrioritie.name());
console.log(taskWithPrioritie.getPriorities());
//# sourceMappingURL=index.js.map