import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    bookName: [
      '',
      Validators.compose([Validators.required, Validators.minLength(5)]),
    ],
    category: ['', Validators.required],
    author: ['', Validators.required],
    price: ['', Validators.required],
  });

  get bookNameControl() {
    return this.bookForm.controls['bookName'];
  }

  get categoryControl() {
    return this.bookForm.controls['category'];
  }

  get authorControl() {
    return this.bookForm.controls['author'];
  }

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
