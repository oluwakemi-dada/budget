import React from 'react';
import { useDispatch } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

const AddExpensePage = ({ history }) => {
  const dispatch = useDispatch();

  // HANDLERS
  const onSubmitHandler = (expense) => {
    dispatch(addExpense(expense));
    history.push('/');
  };

  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm onSubmit={onSubmitHandler} />
    </div>
  );
};

export default AddExpensePage;
