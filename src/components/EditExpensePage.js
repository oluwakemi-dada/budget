import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = ({ history, match }) => {
  const dispatch = useDispatch();

  // SELECTORS
  const expenses = useSelector((state) => state.expenses);

  const expenseToEdit = expenses.find(
    (expense) => expense.id === match.params.id
  );

  // HANDLERS
  const onSubmitHandler = (updatedExpense) => {
    dispatch(editExpense(expenseToEdit.id, updatedExpense));
    history.push('/');
  };

  const onRemoveHandler = () => {
    dispatch(removeExpense(expenseToEdit.id));
    history.push('/');
  };

  return (
    <div>
      <ExpenseForm expense={expenseToEdit} onSubmit={onSubmitHandler} />
      <button onClick={onRemoveHandler}>Remove</button>
    </div>
  );
};

export default EditExpensePage;
