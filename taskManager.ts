import { Task } from "./task";

//Singleton
export class TaskManager{
    tasks: Task [];

    private static instance: TaskManager;

    private constructor(){
        this.tasks = [];
    }

    public static getInstance(): TaskManager {
        if(!TaskManager.instance) {
            TaskManager.instance = new TaskManager;
        }

        return TaskManager.instance;
    }

    // Méthode pour ajouter une tâche
    public addTask(Task : Task){
        this.tasks.push(Task);
        console.log("Tache ajoutée : " + Task.name());
    }

    // Méthode pour fermer une tâche
    closeTask(taskToDelete: Task) {
        const indexDelete = this.tasks.findIndex(task => task.name === taskToDelete.name);
        this.tasks.splice(indexDelete, 1);
        console.log("Tache supprimée : " + taskToDelete.name);
    }
}