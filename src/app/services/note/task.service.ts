import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {TaskDto} from "./dto/TaskDto";
import {UpdateTaskStatusDto} from "./dto/UpdateTaskStatusDto";
import {CreateTaskDto} from "./dto/CreateTaskDto";
import {FilterTaskDto} from "./dto/FilterTaskDto";

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    constructor(private httpClient: HttpClient) {
    }

    getTasks() {
        return this.httpClient.get<TaskDto[]>("tasks")
    }

    getTasksByFilter(filterTaskDto: FilterTaskDto) {
        let httpParams = new HttpParams();
        if (filterTaskDto.status != undefined) {
            console.log("a")
            httpParams = httpParams.append("status", filterTaskDto.status);
        }
        if (filterTaskDto.search != undefined) {
            httpParams = httpParams.append("search", filterTaskDto.search);
            console.log("b")
        }
        console.log(httpParams);
        return this.httpClient.get<TaskDto[]>("tasks",{
            params: httpParams,
        });
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
