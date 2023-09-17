import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  getTasks() {
    return [
      {
        "id": 1,
        "title": "Task 1",
        "status": false
      }
    ];
  }

  constructor() { }
}
