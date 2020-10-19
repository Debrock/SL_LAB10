import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-create',
  templateUrl: './to-do-create.component.html',
  styleUrls: ['./to-do-create.component.css']
})
export class ToDoCreateComponent implements OnInit {
  // public items = [Date d, Text t, Text ds];
  public newTask;
  public addToList() {
    if (this.newTask == '') {
    }
    else {
        this.items.d.push(this.newTask.d);
        this.newTask = '';
    }
}
  constructor() { }

  ngOnInit(): void {
  }

}
