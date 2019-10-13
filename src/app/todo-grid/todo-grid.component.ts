import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule, MatSort } from '@angular/material';

import { TodoService } from '../services/todo.service';
import { ITodo } from '../interfaces/itodo';
import { TodoComponent } from '../todo/todo.component';

@Component({
  selector: 'todo-grid',
  templateUrl: './todo-grid.component.html',
  styleUrls: ['./todo-grid.component.scss']
})
export class TodoGridComponent implements OnInit, AfterViewInit {
  

  constructor(private todoService: TodoService) { }

  dataSource: MatTableDataSource<ITodo>;

  displayedColumns: string[] = ['date', 'title', 'isDone', 'isDoing',];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(TodoComponent, { static: true }) todo: TodoComponent;

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.todoService.todoList);
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    console.log('Added Array Element');
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}