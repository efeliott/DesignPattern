import { TaskManager } from "./taskManager";
import { Task, ProjectTasks, PersonalTasks, UrgentTasks, SimpleTask ,NotesDecorator, LabelsDecorator, PrioritiesDecorator } from "./task";
import { PersonalTasksFactory, ProjectTasksFactory, UrgentTasksFactory } from "./taskFactory";

const tasks : Task[] = [new PersonalTasks('Tache perso'),
new ProjectTasks('Tache projet'),
new UrgentTasks('Tache urgente')];

tasks.forEach((task) => {
    //Création de trois tâches
    TaskManager.getInstance().addTask(task);
})

// Supprime la première tâche
TaskManager.getInstance().closeTask(tasks[0]);

console.log(tasks);

const task: Task = new SimpleTask("Tâche principale");
const taskWithNote: Task = new NotesDecorator(task, "Ajoutez votre note ici.");

console.log(taskWithNote.name()); // Affiche: "Tâche principale"
console.log((taskWithNote as NotesDecorator).getNote());