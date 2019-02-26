import { BookRatingService } from './book-rating.service';
import { Book } from './book';

describe('BookRatingService', () => {
  let book: Book;
  let service: BookRatingService;

  beforeEach(() => {
    // Arrange
    service = new BookRatingService();
    book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3,
      authors: [''],
      price: 22
    };
  });

  it('should rate up a book', () => {
    // Act
    const ratedBook = service.rateUp(book);

    // Assert
    expect(ratedBook.rating).toBe(4);
  });
  
  it('should rate down a book', () => {
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });
  
  it('should not be allowed to rate higher than 5', () => {
    // Arrange
    book.rating = 5;

    // Act
    const ratedBook = service.rateUp(book);

    // Assert
    expect(ratedBook.rating).toBe(5);

  });
  
  it('should not be allowed to rate lower than 1', () => {
    book.rating = 1;
    const ratedBook = service.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });
});
