import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {
    // const isbn = this.route.snapshot.paramMap.get('isbn');
    
    // TODO: Doppeltes subscribe vermeiden!
    this.route.paramMap.subscribe(params => {
      const isbn = params.get('isbn');
      console.log(isbn);
      this.bs.getSingle(isbn).subscribe(book => this.book = book);
    });
  }

}
