import React from 'react';
import { useSelector } from 'react-redux';
import numeral from 'numeral';
import visibleExpenses from '../selectors/expenses';
import visibleExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = () => {
  // SELECTORS
  const getVisibleExpenses = useSelector((state) =>
    visibleExpenses(state.expenses, state.filters)
  );

  // VALUES
  const expenseCount = getVisibleExpenses.length;
  const expensesTotal = visibleExpensesTotal(getVisibleExpenses);

  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const expensesTotalNumeral = numeral(expensesTotal / 100).format('$0,0.00');
  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totaling {expensesTotalNumeral}
      </h1>
    </div>
  );
};

export default ExpensesSummary;
