import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskDto, TaskStatus} from "../../../services/note/dto/TaskDto";
import {MatSelectChange} from "@angular/material/select";
import {TaskService} from "../../../services/note/task.service";
import {UpdateTaskStatusDto} from "../../../services/note/dto/UpdateTaskStatusDto";

@Component({
    selector: 'app-task-element',
    templateUrl: './task-element.component.html',
    styleUrls: ['./task-element.component.scss']
})
export class TaskElementComponent implements OnInit {

    @Input() task: TaskDto|undefined;
    @Output() deleteEvent = new EventEmitter<TaskDto>();
    status: TaskStatus|undefined;//TODO rewrite this

    constructor(private taskService: TaskService) {

    }

    ngOnInit(): void {
        this.status = this.task?.status;
    }

    onDelete() {
        this.deleteEvent.emit(this.task);
    }

    onChangeStatus($event: MatSelectChange) {
        let value:TaskStatus = $event.value;
        if (this.task != undefined) {
            this.taskService.updateTaskStatus(this.task?.id, new UpdateTaskStatusDto(value)).subscribe(value1 => {
                if (this.task != undefined) {
                    this.task.status = value;
                }
            },error => {
                console.log("[error][TaskElementComponent]" + error);
            });
        }
    }

    getStatus() {
        //TODO
        //this not working properly always change to in progress
        if (this.status === TaskStatus.IN_PROGRESS) {
            return "in progress"
        }else if (this.status === TaskStatus.OPEN) {
            return "open"
        }else if (this.status === TaskStatus.DONE) {
            return "done"
        }
        return "not specified"
    }
}
