import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { LoadBooks } from '../actions/book.actions';
import { getBooksLoading, getAllBooks } from '../selectors/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loading$ = this.store.pipe(select(getBooksLoading));
  books$ = this.store.pipe(select(getAllBooks));

  d = new Date();

  // books: Book[];

  constructor(
    private rs: BookRatingService,
    private bs: BookStoreService,
    private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(new LoadBooks());
  }

  createBook(book: Book) {
    this.bs.create(book).subscribe(() => {
      // this.books = [...this.books, book];
    });
  }

  rateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.updateList(ratedBook);
  }

  rateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

  updateList(book: Book) {
    /*this.books = this.books
      .map(b => b.isbn === book.isbn ? book : b)
      .sort((a, b) => b.rating - a.rating);*/
  }

}
