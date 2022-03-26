import moment from 'moment';
import {
  SET_TEXT_FILTER,
  SET_START_DATE,
  SET_END_DATE,
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
} from '../constants/filtersConstants';

// Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        text: action.payload,
      };
    case SORT_BY_AMOUNT:
      return {
        ...state,
        sortBy: 'amount',
      };
    case SORT_BY_DATE:
      return {
        ...state,
        sortBy: 'date',
      };
    case SET_START_DATE:
      return {
        ...state,
        startDate: action.payload,
      };
    case SET_END_DATE:
      return {
        ...state,
        endDate: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
