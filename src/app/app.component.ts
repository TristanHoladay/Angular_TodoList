import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todos';
  todoList: any [] = [];
  todoTitle: string;

 ngOnInit() {
   this.todoTitle = '';
   this.todoList = [
     { title: 'Install Angular CLI', isDone: false },
   ];
 }

 addTodo():void {
   this.todoList.push({
     title: this.todoTitle,
     isDone: false,
   
   });

   this.todoTitle = '';
 }

  deleteTodo(todo:any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }

  // markAsDone(todo:any, el:any) {
  //   console.log(this);
  //   todo.isDone = !todo.isDone;
  // }

}
