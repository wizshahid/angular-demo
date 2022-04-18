import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient) {}
  private baseUrl = 'https://localhost:7278/books';

  getBooks = (): Observable<BookModel[]> => {
    return this.httpClient.get<BookModel[]>(this.baseUrl);
  };

  addBook = (book: BookModel): Observable<BookModel> => {
    return this.httpClient.post<BookModel>(this.baseUrl, book);
  };

  deleteBook = (id: string): Observable<any> => {
    return this.httpClient.delete(this.baseUrl + '/' + id);
  };

  getBook = (id: string): Observable<BookModel> => {
    return this.httpClient.get<BookModel>(this.baseUrl + '/' + id);
  };

  updateBook = (id: string, book: BookModel): Observable<any> => {
    return this.httpClient.put(this.baseUrl + '/' + id, book);
  };
}
