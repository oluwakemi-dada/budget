import React from 'react';
import { useSelector } from 'react-redux';
import numeral from 'numeral';
import visibleExpenses from '../selectors/expenses';
import visibleExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = () => {
  // SELECTOR
  const expenses = useSelector((state) => state.expenses);
  const filters = useSelector((state) => state.filters);

  const visibleExp = visibleExpenses(expenses, filters);

  // VALUES
  const expenseCount = visibleExp.length;
  const expensesTotal = visibleExpensesTotal(visibleExp);

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
