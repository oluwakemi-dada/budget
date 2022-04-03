import {
  SET_TEXT_FILTER,
  SET_START_DATE,
  SET_END_DATE,
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
} from '../constants/filtersConstants';

// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: SET_TEXT_FILTER,
  payload: text,
});

// SORT_BY_DATE
export const sortByDate = () => ({
  type: SORT_BY_DATE,
});

// SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: SORT_BY_AMOUNT,
});

// SET_START_DATE
export const setStartDate = (startDate) => ({
  type: SET_START_DATE,
  payload: startDate,
});

// SET_END_DATE
export const setEndDate = (endDate) => ({
  type: SET_END_DATE,
  payload: endDate,
});
