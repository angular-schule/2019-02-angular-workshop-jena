import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private apiUrl = 'https://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    // TODO: Mapping
    // TODO: Error Handling
    return this.http.get<Book[]>(`${this.apiUrl}/books`);
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/book/${isbn}`);
  }

  create(book: Book): Observable<unknown> {
    return this.http.post(
      `${this.apiUrl}/books`,
      book,
      { responseType: 'text' }
    );
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
