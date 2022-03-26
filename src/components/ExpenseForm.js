import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';

const ExpenseForm = ({ onSubmit }) => {
  // SELECTORS
  const expense = useSelector((state) => state.expenses);

  // STATE
  const [description, setDescription] = useState(
    expense ? expense.description : ''
  );
  const [note, setNote] = useState(expense ? expense.note : '');
  const [amount, setAmount] = useState(
    expense ? (expense.amount / 100).toString() : ''
  );
  const [createdAt, setCreatedAt] = useState(
    expense ? moment(expense.createdAt) : moment()
  );
  const [calenderFocused, setCalenderFocused] = useState(false);

  // HANDLERS
  const onDescriptionChangeHandler = (e) => {
    const description = e.target.value;
    setDescription({ description });
  };

  const onNoteChangeHandler = (e) => {
    const note = e.target.value;
    setNote({ note });
  };

  const onAmountChangeHandler = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) setAmount({ amount });
  };

  const onDateChangeHandler = (createdAt) => {
    if (createdAt) setCreatedAt({ createdAt });
  };

  const onFocusChangeHandler = ({ focused }) => {
    setCalenderFocused({ calenderFocused: focused });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Send data upstream
    onSubmit({
      description: description,
      amount: parseFloat(amount, 10) * 100,
      createdAt: createdAt.valueOf(),
      note: note,
    });
  };

  return (
    <form className='form' onSubmit={onSubmitHandler}>
      <input
        type='text'
        placeholder='Description'
        autoFocus
        className='text-input'
        value={description}
        onChange={onDescriptionChangeHandler}
        required
      />
      <input
        type='text'
        placeholder='Amount'
        className='text-input'
        value={amount}
        onChange={onAmountChangeHandler}
        required
      />
      <SingleDatePicker
        date={createdAt}
        onDateChange={onDateChangeHandler}
        focused={calenderFocused}
        onFocusChange={onFocusChangeHandler}
        numberOfMonths={1}
        readOnly={true}
        isOutsideRange={() => false}
      />
      <textarea
        placeholder='Add a note'
        value={note}
        className='textarea'
        onChange={onNoteChangeHandler}
      ></textarea>
      <button className='button'>Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
