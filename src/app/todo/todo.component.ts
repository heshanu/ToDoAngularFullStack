import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../shared/class/Todo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor(
    private todoservice: TodoDataService,
    private route: ActivatedRoute
  ) {}
  id!: number;
  todo!: Todo;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(1, '',true,new Date());
    this.todoservice
      .retrieveTodos('in23min', this.id)
      .subscribe((data) => (this.todo = data));
  }

  saveTodo() {}
}
