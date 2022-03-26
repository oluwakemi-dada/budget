import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import visibleExpenses from '../selectors/expenses';
import visibleExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
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

const mapStateToProps = (state) => {
  const getVisibleExpenses = visibleExpenses(state.expenses, state.filters);
  return {
    expenseCount: getVisibleExpenses.length,
    expensesTotal: visibleExpensesTotal(getVisibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
