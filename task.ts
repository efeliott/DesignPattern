export interface Task {
    name(): string;
}

export class SimpleTask implements Task{
    constructor(private taskName: string){}

    name(): string {
        return this.taskName;
    };
}

// Decorator pour ajouter une note
export class NotesDecorator extends SimpleTask{
    private task: Task;
    private taskNote: string;

    constructor(private tasks: Task, private note: string){
        super(tasks.name());
        this.task = tasks;
        this.taskNote = note;
    }

    name(): string {
        return this.task.name();
    }

    getNote(): string {
        return "Notes : " + this.note;
    }
}

// Decorator pour ajouter un label
export class LabelsDecorator extends SimpleTask{
    private task: Task;
    private taskLabels: string;

    constructor(private tasks: Task, private label: string){
        super(tasks.name());
        this.task = tasks;
        this.taskLabels = label;
    }

    name(): string {
        return this.task.name();
    }

    getLabel(): string {
        return "Label : " + this.label;
    }
}

export class PrioritiesDecorator extends SimpleTask{
    private task: Task;
    private taskPriorities: number;

    constructor(private tasks: Task, private prioritie: number){
        super(tasks.name());
        this.task = tasks;
        this.taskPriorities = prioritie;
    }

    name(): string {
        return this.task.name();
    }

    getPriorities(): string {
        return "Priorities level : " + this.prioritie;
    }
}

export class ProjectTasks implements Task {
    private taskName: string;

    constructor(taskName: string) {
        this.taskName = taskName;
    }

    // Implémentation de la méthode de l'interface Task
    name(): string {
        return this.taskName;
    }

    // Méthode pour ajouter une tâche
    public addTask(task: Task): void {
        console.log("Tache ajoutée : " + task.name());
    }
}

export class PersonalTasks implements Task {
    private taskName: string;

    constructor(taskName: string) {
        this.taskName = taskName;
    }

    // Implémentation de la méthode de l'interface Task
    name(): string {
        return this.taskName;
    }

    // Méthode pour ajouter une tâche
    public addTask(task: Task): void {
        console.log("Tache ajoutée : " + task.name());
    }
}

export class UrgentTasks implements Task {
    private taskName: string;

    constructor(taskName: string) {
        this.taskName = taskName;
    }

    // Implémentation de la méthode de l'interface Task
    name(): string {
        return this.taskName;
    }

    // Méthode pour ajouter une tâche
    public addTask(task: Task): void {
        console.log("Tache ajoutée : " + task.name());
    }
}