import moment from 'moment';
import filtersReducer from '../../reducers/filters';
import {
  SET_TEXT_FILTER,
  SET_START_DATE,
  SET_END_DATE,
  SORT_BY_AMOUNT,
  SORT_BY_DATE,
} from '../../constants/filtersConstants';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should set sortBy to amount', () => {
  const action = { type: SORT_BY_AMOUNT };
  const state = filtersReducer(undefined, action);
  expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  };
  const action = { type: SORT_BY_DATE };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should setText filter', () => {
  const text = 'abc';
  const action = {
    type: SET_TEXT_FILTER,
    payload: text,
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

test('should set startDate filter', () => {
  const startDate = moment();
  const action = {
    type: SET_START_DATE,
    payload: startDate,
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(startDate);
});

test('should set endDate filter', () => {
  const endDate = moment();
  const action = {
    type: SET_END_DATE,
    payload: endDate,
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});
