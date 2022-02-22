import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../../services/note/task.service";

@Component({
    selector: 'app-task-main-screen',
    templateUrl: './task-main-screen.component.html',
    styleUrls: ['./task-main-screen.component.scss']
})
export class TaskMainScreenComponent implements OnInit {

    constructor(private taskService: TaskService) {
    }

    ngOnInit(): void {
        this.taskService.getNotes().subscribe((tasks) => {
            console.log(tasks)
        }, (error) => {
            console.log(error)
        })
    }

}
