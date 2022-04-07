import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient) {}
  baseUrl = 'https://localhost:7042/books';

  getBooks = (): Observable<BookModel[]> => {
    return this.httpClient.get<BookModel[]>(this.baseUrl);
  };
}
