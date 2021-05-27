import { CREATE_BOOK, REMOVE_BOOK } from './actionTypes';

export const createBookAction = () => ({
  type: CREATE_BOOK,
});

export const removeBookAction = () => ({
  type: REMOVE_BOOK,
});
