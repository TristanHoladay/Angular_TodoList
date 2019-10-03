import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: ITodo[] = [
    {
      id: 1,
      title: "Install Angular CLI",
      isDone: false,
      isDoing: false,
      isEditing: false,
      date: new Date()
    }
  ];

  constructor() { }

  getTodoItems() {
    return this.todoList;
  }

  add(todo:ITodo) {
    this.todoList.push(todo);
  }

  deleteTodo(todo:ITodo) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }
}
