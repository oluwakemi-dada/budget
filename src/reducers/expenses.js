import {
  ADD_EXPENSE,
  REMOVE_EXPENSE,
  EDIT_EXPENSE,
} from '../constants/expensesConstants';

// Expenses Reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return [...state, action.payload];

    case REMOVE_EXPENSE:
      return state.filter(({ id }) => id !== action.payload);

    case EDIT_EXPENSE:
      return state.map((expense) => {
        console.log(action.payload.id);
        console.log(action.payload.updates);
        if (expense.id === action.payload.id) {
          return {
            ...expense,
            ...action.payload.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

export default expensesReducer;
