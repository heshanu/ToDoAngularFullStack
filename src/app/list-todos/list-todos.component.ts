import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../shared/class/Todo';
//import { TodoInterface } from '../shared/interface/Todo.interface';

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
  constructor(private todoservice: TodoDataService) {}

  ngOnInit(): void {
    this.todoservice.retrirveAllTodos('in23min').subscribe((res) => {
      console.log(res);
      this.todos = res;
    });
  }

  refreshTodos() {
    this.todoservice.retrirveAllTodos('in23min').subscribe((res) => {
      console.log(res);
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
}
