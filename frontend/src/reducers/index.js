import { combineReducers } from 'redux';
import expensesReducer from './expenses';
import filtersReducer from './filters';

export default combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
});
