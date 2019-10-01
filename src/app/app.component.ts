import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { ITodo } from './interfaces/itodo';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todos';
  todoList: ITodo[] = [];
  todoTitle: string;
  todoId: number;

  constructor(private todoService: TodoService) {}

 ngOnInit() {
   this.todoId = 1;
   this.todoTitle = '';
   this.todoList = this.todoService.todoList;
   this.todoList.push({
      id: this.todoId,
      isDoing: false,
      isEditing: false,
      title: "Angular Todo App",
      isDone: false,
      date: new Date(),
   });
 }

 addTodo():void {
   this.todoId++;
    this.todoService.add({
     id: this.todoId,
     title: this.todoTitle,
     isDone: false,
     isDoing: false,
     isEditing: false,
     date: new Date(),
   });

   this.todoTitle = '';
 }

 delete(todo: ITodo) {
   this.todoService.deleteTodo(todo);
 }

}
