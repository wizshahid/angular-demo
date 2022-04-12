import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  bookForm = this.formBuilder.group({
    bookName: ['', Validators.required],
    category: ['', Validators.required],
    author: ['', Validators.required],
    price: ['', Validators.required],
  });

  ngOnInit(): void {}

  addBook() {
    if (this.bookForm.valid) {
      console.log(this.bookForm.value);
    } else {
      alert('Invalid');
    }
  }
}
