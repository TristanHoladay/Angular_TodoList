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

  @Input() todoList: ITodo[];
  dataSource = new MatTableDataSource(this.todoList)

  displayedColumns: string[] = ['date', 'title', 'isDone', 'isDoing',];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  //@ViewChild(TodoComponent, { static: true }) list: TodoComponent;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

  ngAfterViewInit() {
    console.log('Added Array Element');
    this.todoService.refreshTable().subscribe((data: ITodo[]) => {
      this.dataSource.data = data;
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}