import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = ({ history, match }) => {
  const dispatch = useDispatch();

  // SELECTORS
  const expense = useSelector((state) =>
    state.expenses.find((expense) => expense.id === match.params.id)
  );

  // HANDLERS
  const onSubmitHandler = (updatedExpense) => {
    dispatch(editExpense(expense.id, updatedExpense));
    history.push('/');
  };

  const onRemoveHandler = () => {
    dispatch(removeExpense(expense.id));
    history.push('/');
  };

  return (
    <div>
      <ExpenseForm expense={expense} onSubmit={onSubmitHandler} />
      <button onClick={onRemoveHandler}>Remove</button>
    </div>
  );
};

export default EditExpensePage;
