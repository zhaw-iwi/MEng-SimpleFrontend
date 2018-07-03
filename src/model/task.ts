import { Context } from "./context";
import { Project } from "./project";

export interface Task {
    id: number;
    name: string;
    done: boolean;
    creationDate: Date;
    dueDate: Date;
    durationInMinutes: number;
    project: Project;
    context: Context;
}

export class TaskImpl implements Task {
    id: number;
    name: string;
    done: boolean;
    creationDate: Date;
    dueDate: Date;
    durationInMinutes: number;
    project: Project;
    context: Context;
}
