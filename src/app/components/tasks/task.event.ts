import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {TaskDto} from "../../services/note/dto/TaskDto";
import {FilterTaskDto} from "../../services/note/dto/FilterTaskDto";

@Injectable({
    providedIn: 'root'
})
export class TaskEvent {
    $newtask = new EventEmitter<TaskDto>();
    $taskfilter = new EventEmitter<FilterTaskDto>();
    constructor() {}

}
