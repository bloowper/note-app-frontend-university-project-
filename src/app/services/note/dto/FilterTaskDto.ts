import {TaskStatus} from "./TaskDto";

export class FilterTaskDto {
    constructor(public status?:TaskStatus,public search?:string ) {}

}
