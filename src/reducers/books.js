import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionTypes';

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return [
        ...state,
        {
          id: 1,
          title: 'title remove',
          category: 'title remove',
        },
      ];
    default:
      break;
  }
  return state;
};

export default bookReducer;
