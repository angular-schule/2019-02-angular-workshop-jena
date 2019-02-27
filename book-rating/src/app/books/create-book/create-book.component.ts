import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  bookForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      isbn: new FormControl(''),
      title: new FormControl(''),
      description: new FormControl(''),
      price: new FormControl(),
      authors: new FormArray([
        new FormControl(''),
        new FormControl('')
      ])
    });
  }

  get authors(): FormArray {
    return this.bookForm.get('authors') as FormArray;
    // Type Assertion ist böse!
    // Nur verwenden, wenn man ganz sicher ist, dass der Typ stimmt!
  }

  addAuthor() {
    this.authors.push(new FormControl(''));
  }

}
