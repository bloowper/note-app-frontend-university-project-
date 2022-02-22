import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TaskDto} from "./dto/TaskDto";

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(private httpClient: HttpClient) {
    }

    getNotes() {
        return this.httpClient.get<TaskDto[]>("tasks")
    }
}
