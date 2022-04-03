import visibleExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should sum up all expenses', () => {
  const result = visibleExpensesTotal(expenses);
  expect(result).toBe(114195);
});

test('should correctly add up a single expense', () => {
  const result = visibleExpensesTotal([expenses[2]]);
  expect(result).toBe(4500);
});

test('should return 0 if no expense', () => {
  const result = visibleExpensesTotal([]);
  expect(result).toBe(0);
});
