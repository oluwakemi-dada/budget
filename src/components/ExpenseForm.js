import React, { useState } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

const ExpenseForm = ({ onSubmit, expense }) => {
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
  const [error, setError] = useState('');

  // HANDLERS
  const onAmountChangeHandler = (e) => {
    let amt = e.target.value;
    if (!amt || amt.match(/^\d{1,}(\.\d{0,2})?$/)) {
      setAmount(amt);
    }
  };

  const onDateChangeHandler = (createdAt) => {
    if (createdAt) setCreatedAt(createdAt);
  };

  const onFocusChangeHandler = ({ focused }) => {
    setCalenderFocused(focused);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!description || !amount) {
      // 'Please provide description and amount'
      setError('Please provide description and amount');
    } else {
      // Clear error
      setError('');

      // Send data upstream
      onSubmit({
        description,
        amount: parseFloat(amount, 10) * 100,
        createdAt: createdAt.valueOf(),
        note,
      });
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form className='form' onSubmit={onSubmitHandler}>
        <input
          type='text'
          placeholder='Description'
          autoFocus
          className='text-input'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type='text'
          placeholder='Amount'
          className='text-input'
          value={amount}
          onChange={(e) => onAmountChangeHandler(e)}
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
          className='textarea'
          value={note}
          onChange={(e) => setNote(e.target.value)}
        ></textarea>
        <button className='button'>Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
