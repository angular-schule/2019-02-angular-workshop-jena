import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from './book';
import { Observable, of, range } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private apiUrl = 'https://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    // TODO: Mapping
    return this.http.get<any[]>(`${this.apiUrl}/books`).pipe(
      map(rawBooks => rawBooks.map(
        rawBook => this.mapToBook(rawBook)
      )),
      catchError(err => of(this.getAllStatic()))
    );
  }

  search(term: string): Observable<Book[]> {
    return this.http.get<any[]>(`${this.apiUrl}/books/search/${term}`).pipe(
      map(rawBooks => (rawBooks ? rawBooks : [])),
      map(rawBooks => rawBooks.map(rawBook => this.mapToBook(rawBook)))
    );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<any>(`${this.apiUrl}/book/${isbn}`).pipe(
      map(rawBook => this.mapToBook(rawBook))
    );
  }

  create(book: Book): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/books`,
      book,
      { responseType: 'text' }
    );
  }


  private mapToBook(rawBook: any): Book {
    return {
      isbn: rawBook.isbn,
      title: rawBook.title,
      price: rawBook.price,
      rating: rawBook.rating,
      authors: rawBook.authors,
      description: rawBook.description
    };
  }

  getAllStatic(): Book[] {
    return [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Grundlagen und Best Practices',
        price: 34.90,
        authors: ['Malcher', 'Hoppe'],
        rating: 5
      },
      {
        isbn: '111',
        title: 'React',
        description: 'Ein anderes Framework',
        price: 32.90,
        authors: ['Zeigermann', 'Hartmann'],
        rating: 3
      }
    ];
  }
}
