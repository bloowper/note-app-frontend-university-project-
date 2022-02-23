import {TaskStatus} from "./TaskDto";

export class UpdateTaskStatusDto {
    constructor(private status: TaskStatus) {
    }
}
