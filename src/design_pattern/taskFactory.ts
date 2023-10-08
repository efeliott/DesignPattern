import { Task, PersonalTasks, ProjectTasks, UrgentTasks } from "./task";

interface TaskFactory{
    create(name: string): Task;
}

export class ProjectTasksFactory implements TaskFactory{
    create(name: string): Task{
        return new ProjectTasks(name);
    }
}

export class PersonalTasksFactory implements TaskFactory{
    create(name: string): Task{
        return new PersonalTasks(name);
    }
}

export class UrgentTasksFactory implements TaskFactory{
    create(name: string): Task{
        return new UrgentTasks(name);
    }
}