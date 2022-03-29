import { v4 as uuid } from 'uuid';
import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
} from '../constants/expensesConstants';

// ADD_EXPENSE
export const addExpense = ({
  description,
  amount,
  createdAt,
  note = '',
} = {}) => ({
  type: ADD_EXPENSE,
  payload: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

// REMOVE_EXPENSE
export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE,
  payload: id,
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: EDIT_EXPENSE,
  payload: {
    id,
    updates,
  },
});
