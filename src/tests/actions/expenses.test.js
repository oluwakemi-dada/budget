import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense('123abc');
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    payload: '123abc',
  });
});

test('should setup edit expense action object', () => {
  const expenseUpdate = {
    description: 'sample description',
    note: 'sample note',
    amount: 'sample amount',
    createdAt: 'sample date',
  };
  const action = editExpense('123abc', expenseUpdate);
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    payload: {
      id: '123abc',
      updates: expenseUpdate,
    },
  });
});
