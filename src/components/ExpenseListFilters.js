import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../actions/filters';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const ExpenseListFilter = () => {
  const dispatch = useDispatch();

  // SELECTORS
  const filters = useSelector((state) => state.filters);

  // STATE
  const [calenderFocused, setCalenderFocused] = useState(null);

  // HANDLERS
  const onDatesChangeHandler = ({ startDate, endDate }) => {
    dispatch(setStartDate(startDate));
    dispatch(setEndDate(endDate));
  };

  const onFocusChangeHandler = (calenderFocused) => {
    setCalenderFocused(calenderFocused);
  };

  const onTextChangeHandler = (e) => {
    dispatch(setTextFilter(e.target.value));
  };

  const onSortChangeHandler = (e) => {
    if (e.target.value === 'date') dispatch(sortByDate());
    else if (e.target.value === 'amount') dispatch(sortByAmount());
  };

  return (
    <div className='content-container'>
      <div className='input-group'>
        <div className='input-group__item'>
          <input
            type='text'
            className='text-input'
            placeholder='Search expenses'
            value={filters.text}
            onChange={(e) => {
              onTextChangeHandler(e);
            }}
          />
        </div>
        <div className='input-group__item'>
          <select
            className='select'
            value={filters.sortBy}
            onChange={(e) => onSortChangeHandler(e)}
          >
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
          </select>
        </div>
        <div className='input-group__item'>
          <DateRangePicker
            startDate={filters.startDate}
            startDateId='startDateId'
            endDate={filters.endDate}
            endDateId='endDateId'
            onDatesChange={onDatesChangeHandler}
            focusedInput={calenderFocused}
            onFocusChange={onFocusChangeHandler}
            numberOfMonths={1}
            isOutsideRange={() => false}
            showClearDates={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ExpenseListFilter;
