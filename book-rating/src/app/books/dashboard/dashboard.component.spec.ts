import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, Component, Output } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  let book: Book;

  beforeEach(async(() => {

    book = {
      isbn: '111',
      title: '',
      description: '',
      rating: 3,
      authors: [''],
      price: 44
    };

    const bookRatingMock = {
      rateUp: () => book,
      rateDown: () => book
    };

    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        // Service ersetzen durch Mockobjekt
        { provide: BookRatingService, useValue: bookRatingMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the service for rateUp', () => {
    // Service holen
    const rs = TestBed.get(BookRatingService);

    // spy
    spyOn(rs, 'rateUp').and.callThrough(); // originale Methode trotzdem ausführen

    // Methode aufrufen
    component.rateUp(book);

    // expect called...
    expect(rs.rateUp).toHaveBeenCalledWith(book);
  });

  it('should update the book list', () => {
    // Methode updateList aufrufen
    component.updateList(book);

    // expect: Buch wurde aktualisiert
    const foundBook = component.books.find(b => b.isbn === book.isbn);

    expect(foundBook).toBeTruthy();
    expect(foundBook).toEqual(book); // toEqual() macht Deep Compare
  });
});
