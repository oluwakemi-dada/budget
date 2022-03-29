import expensesReducer from '../../reducers/expenses';
import { expenses } from '../fixtures/expenses';
import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
} from '../../constants/expensesConstants';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should set default state', () => {});
