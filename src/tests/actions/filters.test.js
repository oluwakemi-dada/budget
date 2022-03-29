import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByDate,
  sortByAmount,
} from '../../actions/filters';
import {
  SET_TEXT_FILTER,
  SET_START_DATE,
  SET_END_DATE,
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
} from '../../constants/filtersConstants';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: SET_START_DATE,
    payload: moment(0),
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: SET_END_DATE,
    payload: moment(0),
  });
});

test('should generate set text filter action object', () => {
  const action = setTextFilter('Book');
  expect(action).toEqual({
    type: SET_TEXT_FILTER,
    payload: 'Book',
  });
});

test('should generate set text filter action object for default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: SET_TEXT_FILTER,
    payload: '',
  });
});

test('should generate sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: SORT_BY_AMOUNT,
  });
});

test('should generate sort by date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: SORT_BY_DATE,
  });
});
