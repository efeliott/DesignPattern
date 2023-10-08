import { TaskManager } from "./taskManager";
import { Task, ProjectTasks, PersonalTasks, UrgentTasks, SimpleTask ,NotesDecorator, LabelsDecorator, PrioritiesDecorator } from "./task";

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

const task: Task = new SimpleTask("Tâche simple");
const taskWithNote: Task = new NotesDecorator(task, "Test note");
const taskWithLabel: Task = new LabelsDecorator(task, "Test label");
const taskWithPrioritie: Task = new PrioritiesDecorator(task, 1);

console.log(taskWithNote.name());
console.log((taskWithNote as NotesDecorator).getNote());

console.log(taskWithLabel.name());
console.log((taskWithLabel as LabelsDecorator).getLabel());

console.log(taskWithPrioritie.name());
console.log((taskWithPrioritie as PrioritiesDecorator).getPriorities());