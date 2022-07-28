import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../shared/class/Todo';
//import { TodoInterface } from '../shared/interface/Todo.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  message!: string;
  todos: Todo[] = [
    /*
    new Todo(1,'learn to dance1',false,new Date()),
    new Todo(2,'learn to dance2',true,new Date()),
    new Todo(3,'learn to dance3',true,new Date()),
    new Todo(4,'learn to dance4',false,new Date())*/
  ];
  constructor(private todoservice: TodoDataService, private router: Router) {}

  ngOnInit(): void {
    /*
    this.todoservice.retrirveAllTodos('in23min').subscribe((res) => {
      console.log(res);
      this.todos = res;
    });*/

    this.todoservice.showAllTodos().subscribe((res) => {
      this.todos = res;
    });
  }

  refreshTodos() {
    /*
    this.todoservice.retrirveAllTodos('in23min').subscribe((res) => {
      console.log(res);
      this.todos = res;
    });*/
    this.todoservice.showAllTodos().subscribe((res) => {
      this.todos = res;
    });
  }

  deleteTodo(id: any) {
    console.log(`delete id ${id}`);
    this.todoservice.deleteTodos('in23min', id).subscribe((res) => {
      console.log(res);
      this.message = `delete of todo ${id} Successfull `;
      this.refreshTodos();
    });
  }

  deleteTodos(id: any) {
    console.log(`delete id ${id}`);
    this.message = `delete of todo ${id} Successfull`;
    /*
    this.todoservice.deleteTodos('in23min', id).subscribe((res) => {
      console.log(res);
      this.message = `delete of todo ${id} Successfull `;
      this.refreshTodos();
    });*/
    this.todoservice.deleteTodosList('in23min', id).subscribe((res) => {
      console.log(res);
      this.message = `delete of ${id}`;
      this.refreshTodos();
    });
  }

  updateTodo(id: any, todo: any) {
    //this.todoservice.updateTodos();
    this.todoservice.updateTodos('in23min', id, todo);
    console.log(`updated  ${id}`);
    this.message = `update sucessful ${id}`;
    this.router.navigate(['/todos', id]);
    this.refreshTodos();
  }


  saveTodo() {
    this.router.navigate(['/todos',-1]);
  }
}
