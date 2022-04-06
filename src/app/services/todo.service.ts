import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoModel } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodoList = (): Observable<TodoModel[]> => {
    return this.http.get<TodoModel[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  };
}
