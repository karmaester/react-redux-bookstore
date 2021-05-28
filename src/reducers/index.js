import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const allReducers = combineReducers({
  books: booksReducer,
  filer: filterReducer,
});

export default allReducers;
