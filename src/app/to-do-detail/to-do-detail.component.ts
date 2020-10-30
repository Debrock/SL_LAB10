import { Component, OnInit } from '@angular/core';
import { TodoDatabaseService } from '../todo-database.service';

@Component({
  selector: 'app-to-do-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.css']
})

export class ToDoDetailComponent implements OnInit {

  index;
  TodoList;
  displayedColumns: string[] = ['id', 'Date', 'Task', 'Description', 'Actions']

  constructor(private list: TodoDatabaseService) { }

  ngOnInit(): void {
    this.TodoList = this.list.TodoList;
  }
  public deleteTask(index) {
    this.TodoList.splice(index, 1);
  }
}



