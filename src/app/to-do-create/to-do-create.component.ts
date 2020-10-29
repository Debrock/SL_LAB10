import { Component, OnInit } from '@angular/core';
import { TodoDatabaseService } from '../todo-database.service';

@Component({
  selector: 'app-to-do-create',
  templateUrl: './to-do-create.component.html',
  styleUrls: ['./to-do-create.component.css']
})
export class ToDoCreateComponent implements OnInit {
  i;
  d;
  t;
  ds;

  constructor(private database: TodoDatabaseService) { }

  ngOnInit(): void {
  }

  addToList(){
    this.database.addTaskToList(this.i, this.d, this.t, this.ds);
  }

}
