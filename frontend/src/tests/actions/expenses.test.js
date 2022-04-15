import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
} from '../../constants/expensesConstants';
import expenses from '../fixtures/expenses';

const middlewares = [thunk];
const createMockStore = configureMockStore(middlewares);

test('should setup remove expense action object', () => {
  const action = removeExpense('123abc');
  expect(action).toEqual({
    type: REMOVE_EXPENSE,
    payload: '123abc',
  });
});

test('should setup edit expense action object', () => {
  const expenseUpdate = {
    note: 'sample note',
    createdAt: 'sample date',
  };
  const action = editExpense('123abc', expenseUpdate);
  expect(action).toEqual({
    type: EDIT_EXPENSE,
    payload: {
      id: '123abc',
      updates: expenseUpdate,
    },
  });
});

test('should add expense with provided values to database and store', () => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    note: 'This one is better',
    amount: '3000',
    createdAt: '1000',
  };

  return store.dispatch(addExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: ADD_EXPENSE,
      payload: {
        id: expect.any(String),
        ...expenseData,
      },
    });
  });
});

test('should setup add expense action object with default note', () => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Rent',
    amount: '109500',
    createdAt: '1000',
  };

  return store.dispatch(addExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: ADD_EXPENSE,
      payload: {
        ...expenseData,
        note: '',
        id: expect.any(String),
      },
    });
  });
});
