import React from 'react';
import { useSelector } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import visibleExpenses from '../selectors/expenses';

const ExpenseList = () => {
  // SELECTOR
  const expenses = useSelector((state) => state.expenses);
  const filters = useSelector((state) => state.filters)

  const visibleExp = visibleExpenses(expenses, filters)

  return (
    <div>
      {expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
        visibleExp.map((expense) => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      )}
    </div>
  );
};

export default ExpenseList;
