import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private router: Router
  ) {}

  bookForm = this.formBuilder.group({
    bookName: ['', Validators.required],
    category: ['', Validators.required],
    author: ['', Validators.required],
    price: ['', Validators.required],
  });

  ngOnInit(): void {}

  addBook() {
    if (this.bookForm.valid) {
      this.bookService.addBook(this.bookForm.value).subscribe((data) => {
        this.router.navigate(['/books/list']);
      });
    } else {
      alert('Invalid');
    }
  }
}
