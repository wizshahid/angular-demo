import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
})
export class BooksComponent implements OnInit {
  books: BookModel[] = [];
  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((data) => {
      this.books = data;
    });
  }
}
