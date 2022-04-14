import { v4 as uuid } from 'uuid';
import database from '../firebase/firebase';
import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
} from '../constants/expensesConstants';

// ADD_EXPENSE
export const addExpense = (expense) => (dispatch) => {
  database
    .ref('expenses')
    .push(expense)
    .then((ref) => {
      // dispatch add expense
      dispatch({
        type: ADD_EXPENSE,
        payload: { id: ref.key, ...expense },
      });
    });
};

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
