import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../../shared/class/Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient) {}
  showAllTodos(){
    return this.http.get<Todo[]>(
      `http://localhost:8080/users/todos`
    )
  }

  retrirveAllTodos(username: string) {
    return this.http.get<Todo[]>(
      `http://localhost:8080/users/${username}/todos`
    );
  }

  deleteTodos(username: any, id: any) {
    return this.http.delete(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
  }

  deleteTodosList(username:any,id:number){
    return this.http.delete(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
  }

  retrieveTodos(username: any, id: any) {
    return this.http.get<Todo>(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
  }

  updateTodos(username:any,id: any,todo:any) {
    return this.http.put(
      `http://localhost:8080/users/${username}/todos/${id}`,todo
    );
  }


}
