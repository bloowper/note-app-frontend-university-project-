import {Component, OnDestroy, OnInit} from '@angular/core';
import {TaskService} from "../../../services/note/task.service";
import {TaskDto} from "../../../services/note/dto/TaskDto";
import {TaskEvent} from "../task.event";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit,OnDestroy {

    tasks: TaskDto[]|null = null;
    $newTask: Subscription;
    $filterTask: Subscription;

    constructor(private taskService: TaskService, private taskEvent: TaskEvent) {
        this.$newTask = taskEvent.$newtask.subscribe((task)=>{
            this.tasks?.push(task);
        });
        this.$filterTask = taskEvent.$taskfilter.subscribe((filterTask)=>{
            console.log("1")
            this.taskService.getTasksByFilter(filterTask).subscribe((tasks:TaskDto[]) => {
                console.log("2")
                this.tasks = tasks;
            },error => {
                console.error("[TaskListComponent]"+error)
            })
        });
    }

    ngOnInit(): void {
        this.taskService.getTasks().subscribe((tasks) => {
            this.tasks = tasks;
        }, (error) => {
            //TODO error handling
            console.log(error)
        })
    }

    ngOnDestroy(): void {
        this.$newTask.unsubscribe();
        this.$filterTask.unsubscribe();
    }



    onDelete(task: TaskDto) {
        this.taskService.deleteTask(task.id).subscribe(value => {
            this.tasks?.splice(this.tasks?.findIndex(value1 => value1.id == task.id),1)
        },error => {
            console.error("Error occurred [TaskListComponent.onDelete]: "+error)
        })
    }
}
