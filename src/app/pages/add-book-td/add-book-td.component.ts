import { Component, OnInit } from '@angular/core';
import { BookModel } from 'src/app/models/book.model';

@Component({
  selector: 'app-add-book-td',
  templateUrl: './add-book-td.component.html',
  styleUrls: ['./add-book-td.component.css'],
})
export class AddBookTdComponent implements OnInit {
  book: BookModel = {
    author: '',
    bookName: '',
    category: '',
    id: '',
    price: 0,
  };
  constructor() {}

  ngOnInit(): void {}
}
