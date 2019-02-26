import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BookComponent } from './book.component';
import { Book } from '../shared/book';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    component.book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3,
      authors: [''],
      price: 22
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit rateUp event for doRateUp', () => {
    let eventBook: Book;

    component.rateUp.subscribe(book => {
      eventBook = book;
    });

    component.doRateUp();

    expect(eventBook).toBeTruthy();
    expect(eventBook).toBe(component.book);
  });

  it('should call method for button click', () => {
    // Spionage!
    spyOn(component, 'doRateUp');

    // Button holen
    const rateUpBtn: HTMLButtonElement = fixture.debugElement
      .query(By.css('[data-testing-id="rateUpBtn"]'))
      .nativeElement;

    // Button klicken
    rateUpBtn.click();

    // Prüfen ob Methode aufgerufen
    expect(component.doRateUp).toHaveBeenCalledTimes(1);
  });


});
