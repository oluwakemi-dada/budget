import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
} from '../../constants/expensesConstants';

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

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    note: "This was last month's rent",
    amount: '109500',
    createdAt: '1000',
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: ADD_EXPENSE,
    payload: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test('should setup add expense action object with default note', () => {
  const expenseData = {
    description: 'Rent',
    amount: '109500',
    createdAt: '1000',
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: ADD_EXPENSE,
    payload: {
      ...expenseData,
      note: '',
      id: expect.any(String),
    },
  });
});
