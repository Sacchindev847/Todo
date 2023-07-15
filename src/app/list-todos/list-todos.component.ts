import { Component, OnInit } from '@angular/core';


export class Todo
{
   constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
   ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos = [
    new Todo(1,"Learning Angular.js", false, new Date()),
    new Todo(2,"Become an Angular expert", false, new Date()),
    new Todo(3,"Best Front end Freamework", false, new Date()),
    new Todo(4,"Just A learner", false, new Date()),
  ]
  ngOnInit(): void {
  }

}
