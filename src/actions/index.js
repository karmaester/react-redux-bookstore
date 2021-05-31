import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from './actionTypes';

export const createBookAction = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

export const removeBookAction = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export const filterBook = (category) => ({
  type: CHANGE_FILTER,
  payload: category,
});
