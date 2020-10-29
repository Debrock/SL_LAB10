import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoDatabaseService {

  TodoList=[
    // {id:1, Date:"1-10-2020", Task:"Meeting @ 11:00", Description:"Developer meet at Level 11" },
    // {id:2, Date:"1-10-2020", Task:"Lunch @ 14:00", Description:"Lunch with client in Hilton" },
    // {id:3, Date:"2-10-2020", Task:"Webinar @ 09:00", Description:"Cyber Security" },
    // {id:4, Date:"3-10-2020", Task:"Deadline @ 00:00", Description:"CISCO Seecurity Update" },
  ];

  // constructor() { }
  addTaskToList(i,d,t,ds){
    this.TodoList.push({id: i, Date: d, Task: t, Description: ds})

  }
  deleteTask(index){
    this.TodoList.splice(index, 1);
  }
}
