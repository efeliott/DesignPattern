import { TaskManager } from "./taskManager";
import { Task, ProjectTasks, PersonalTasks, UrgentTasks } from "./task";
import { PersonalTasksFactory, ProjectTasksFactory, UrgentTasksFactory } from "./taskFactory";

const tasks : Task[] = [new PersonalTasks('Tache perso'),
new ProjectTasks('Tache projet'),
new UrgentTasks('Tache urgente')];

tasks.forEach((tasks) => {
    TaskManager.getInstance().addTask(tasks);
    
    // TaskManager.getInstance().closeTask(tasks);
})