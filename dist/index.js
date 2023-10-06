"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taskManager_1 = require("./taskManager");
const task_1 = require("./task");
const tasks = [new task_1.PersonalTasks('Tache perso'),
    new task_1.ProjectTasks('Tache projet'),
    new task_1.UrgentTasks('Tache urgente')];
tasks.forEach((tasks) => {
    taskManager_1.TaskManager.getInstance().addTask(tasks);
    // TaskManager.getInstance().closeTask(tasks);
});
//# sourceMappingURL=index.js.map