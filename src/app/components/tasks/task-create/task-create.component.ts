import {Component, OnInit} from '@angular/core';
import {TaskEvent} from "../task.event";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "../../../services/note/task.service";
import {CreateTaskDto} from "../../../services/note/dto/CreateTaskDto";

@Component({
    selector: 'app-task-create',
    templateUrl: './task-create.component.html',
    styleUrls: ['./task-create.component.scss']
})
export class TaskCreateComponent implements OnInit {

    form: FormGroup;

    constructor(private taskEvent: TaskEvent, private taskService:TaskService, private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            title:[
                null,
                Validators.required
            ],
            description:[
                null,
                Validators.required
            ],
        })
    }

    ngOnInit()
    {

    }

    onSubmit() {
        if (this.form.valid) {
            let title = this.form.value.title;
            let description = this.form.value.description;
            this.taskService.createTask(new CreateTaskDto(title, description)).subscribe((task) => {
                this.taskEvent.$newtask.next(task);
                this.form.reset();
            },error => {
                console.log("[TaskCreateComponent] on submit failed")
                console.log(error);
            })
        }
    }
}
