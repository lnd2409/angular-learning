import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TaskModel} from "../model/task-model";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private http: HttpClient) {}
  getSomeData() : Observable<TaskModel[]> {
    return this.http.get<TaskModel[]>('https://jsonplaceholder.typicode.com/todos');
  }

  getTasks() {
    return [
      {
        "id": 1,
        "title": "Task 1",
        "status": true
      }
    ];
  }

}
