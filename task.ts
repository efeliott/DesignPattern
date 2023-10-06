export interface Task {
    name: string;
}

class SimpleTask implements Task{
    name: string;
}

// Decorator


export class ProjectTasks implements Task{
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    // Méthode pour ajouter une tâche
    public addTask(Task : Task){
        console.log("Tache ajoutée : " + Task.name);
    }
}

export class PersonalTasks implements Task{
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    // Méthode pour ajouter une tâche
    public addTask(Task : Task){
        console.log("Tache ajoutée : " + Task.name);
    }
}

export class UrgentTasks implements Task{
    name: string;

    constructor(name: string) {
        this.name = name;
    }
    // Méthode pour ajouter une tâche
    public addTask(Task : Task){
        console.log("Tache ajoutée : " + Task.name);
    }
}