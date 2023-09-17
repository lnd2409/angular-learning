import {Component, Input, OnInit} from '@angular/core';
import {TaskModel} from "../../model/task-model";
import {TaskService} from "../../services/task.service";
import {AbstractColumn} from "../../model/abstract-column";
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  constructor(private taskService: TaskService) {}
  data: TaskModel[] = [];
  columns: AbstractColumn[] = [
    {
      key: 'id',
      value: 'ID'
    },
    {
      key: 'title',
      value: 'Title'
    },
    {
      key:'completed',
      value: 'Status'
    }
  ];
  ngOnInit(): void {
    this.taskService.getSomeData().subscribe((data) => {
      this.data = data;
    })
  }
}
