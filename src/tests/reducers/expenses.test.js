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

test('should remove expense by id', () => {
  const action = {
    type: REMOVE_EXPENSE,
    payload: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: REMOVE_EXPENSE,
    payload: -1,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

test('should add an expense', () => {
  const expense = {
    id: 109,
    description: 'Laptop',
    note: '',
    amount: '29500',
    createdAt: 20000,
  };
  const action = {
    type: ADD_EXPENSE,
    payload: expense,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const updates = {
    description: 'Edited description',
    note: 'Edited note',
    amount: '1200',
  };
  const action = {
    type: EDIT_EXPENSE,
    payload: {
      id: expenses[2].id,
      updates,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[2].description).toBe(updates.description);
  expect(state[2].note).toBe(updates.note);
  expect(state[2].amount).toBe(updates.amount);
});

test('should not edit an expense if expense not found', () => {
  const updates = {
    description: 'Edited description',
  };
  const action = {
    type: EDIT_EXPENSE,
    payload: {
      id: '-1',
      updates,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
