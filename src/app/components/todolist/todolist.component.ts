import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from "../../model/task-model";
import {TaskService} from "../../services/task.service";
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})


export class TodolistComponent implements OnInit {
  constructor(private taskService: TaskService) {}
  @Input() columns: string[] = ['#','Task Name', 'Status'];
  datas: TaskModel[] = [];
  ngOnInit(): void {
    this.datas = this.taskService.getTasks();
  }
}
