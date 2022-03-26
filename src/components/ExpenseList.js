import React from 'react';
import { useSelector } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import visibleExpenses from '../selectors/expenses';

export const ExpenseList = () => {
  // SELECTORS
  const expenses = useSelector((state) =>
    visibleExpenses(state.expenses, state.filters)
  );

  return (
    <div>
      {expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        expenses.map((expense) => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      )}
    </div>
  );
};

export default ExpenseList;
