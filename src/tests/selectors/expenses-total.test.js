import visibleExpensesTotal from '../../selectors/expenses-total';
import { expenses } from '../fixtures/expenses';

test('should sum up all expenses amount', () => {
  const result = visibleExpensesTotal(expenses);
  expect(result).toBe(114195);
});
