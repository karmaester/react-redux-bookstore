import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionTypes';

const initialState = [
  {
    id: 0,
    title: 'title one',
    category: 'title one',
  },
  {
    id: 1,
    title: 'title two',
    category: 'title two',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          id: 3,
          title: 'title add',
          category: 'title add',
        },
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
