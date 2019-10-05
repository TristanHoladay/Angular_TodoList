import { Component, OnInit } from '@angular/core';
import { ITodo } from '../interfaces/itodo';
import { TodoService } from '../services/todo.service';
import { FormsModule } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  title = 'Todos';
  todoList: ITodo[] = [];
  todoTitle: string;
  todoId: number = 1;
  status: string = "";
  listEmpty: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private todoService: TodoService) {}

 ngOnInit() {
   this.todoList = this.todoService.todoList;
   this.activatedRoute.paramMap.subscribe(params => {
     this.status = params.get("status");
   });
 }

 changeStatus(stat: string) {
     status = stat;
   console.log(status);
 }

 get filteredArray() {
   if (!this.status) {
     return this.todoService.todoList;
   } else {
    var filteredList = this.todoService.todoList.filter(x =>
      this.status === "done" ? x.isDone : !x.isDone
    );
    if(filteredList.length === 0) {
      this.listEmpty = true;
    } else {
      this.listEmpty = false;
    }
    return filteredList;
   }
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
