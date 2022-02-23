import {Component, OnInit} from '@angular/core';
import {TaskEvent} from "../task.event";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TaskStatus} from "../../../services/note/dto/TaskDto";
import {FilterTaskDto} from "../../../services/note/dto/FilterTaskDto";

@Component({
    selector: 'app-task-search',
    templateUrl: './task-search.component.html',
    styleUrls: ['./task-search.component.scss']
})
export class TaskSearchComponent implements OnInit {
    filterForm: FormGroup;

    constructor(private taskEvent: TaskEvent, private formBuilder: FormBuilder) {
        this.filterForm = this.formBuilder.group({
            status: [undefined],
            search: [undefined],
        })
    }

    ngOnInit(): void {

    }

    onSubmit() {
        let status:TaskStatus|undefined = this.filterForm.value.status;
        let search: string | undefined = this.filterForm.value.search;
        this.taskEvent.$taskfilter.next(new FilterTaskDto(status, search));
    }
}
