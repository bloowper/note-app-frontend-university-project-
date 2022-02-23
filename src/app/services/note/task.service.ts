import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TaskDto} from "./dto/TaskDto";
import {UpdateTaskStatusDto} from "./dto/UpdateTaskStatusDto";
import {CreateTaskDto} from "./dto/CreateTaskDto";

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(private httpClient: HttpClient) {
    }

    getTasks() {
        return this.httpClient.get<TaskDto[]>("tasks")
    }

    deleteTask(id:string) {
        return this.httpClient.delete(`tasks/${id}`)
    }

    updateTaskStatus(id: string, statusDto: UpdateTaskStatusDto) {
        return this.httpClient.patch(`tasks/${id}/status`, statusDto);
    }

    createTask(createTaskDto: CreateTaskDto) {
        return this.httpClient.post<TaskDto>(`tasks`, createTaskDto);
    }
}
