import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../shared/class/Todo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor(
    private todoservice: TodoDataService,
    private route: ActivatedRoute,
    private router:Router
  ) {}
  id!: number;
  todo!: Todo;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', true, new Date());
    if (this.id != -1) {
      this.todoservice
        .retrieveTodos('in23min', this.id)
        .subscribe((data) => (this.todo = data));
    }
  }

  saveTodo() {
    this.todoservice.updateTodos('in23min',this.id,this.todo).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['todos']);
      }
    )
  }
}
