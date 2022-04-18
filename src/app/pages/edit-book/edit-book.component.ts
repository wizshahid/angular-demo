import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private bookService: BookService
  ) {}

  bookForm = this.formBuilder.group({
    id: ['', Validators.required],
    bookName: ['', Validators.required],
    category: ['', Validators.required],
    author: ['', Validators.required],
    price: ['', Validators.required],
  });

  id = '';

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService
      .getBook(this.id)
      .subscribe((data) => this.bookForm.patchValue(data));
  }

  updateBook = () => {
    if (this.bookForm.valid) {
      this.bookService
        .updateBook(this.id, this.bookForm.value)
        .subscribe((data) => {
          alert('Book updated successfully');
        });
    }
  };
}
