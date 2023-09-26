import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../services/task.service";
import {TaskModel} from "../../model/task-model";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks: TaskModel[] = [];
  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.taskService.getSomeData().subscribe((data) => {
      this.tasks = data;
    });
  }
}
