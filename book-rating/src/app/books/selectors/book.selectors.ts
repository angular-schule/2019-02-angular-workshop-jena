import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/book.reducer';

export const getBookState = createFeatureSelector<State>('book');

export const getBooksLoading = createSelector(
    getBookState,
    state => state.loading
);

export const getAllBooks = createSelector(
    getBookState,
    state => state.books
);
