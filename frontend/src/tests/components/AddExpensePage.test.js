import React from 'react';
import { shallow } from 'enzyme';
import * as reactRedux from 'react-redux';
import AddExpensePage from '../../components/AddExpensePage';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import { addExpense } from '../../actions/expenses';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

test('should render AddExpensePage correctly', () => {
  const history = { push: jest.fn() };
  const wrapper = shallow(<AddExpensePage history={history} />);
  expect(wrapper).toMatchSnapshot();
});

describe('Expense submission', () => {
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
  });

  afterEach(() => {
    useDispatchMock.mockClear();
  });

  const useDispatchMock = reactRedux.useDispatch;

  test('should handle onSubmit', () => {
    const mockDispatch = jest.fn();
    const mockUseDispatch = jest.spyOn(reactRedux, 'useDispatch');
    mockUseDispatch.mockReturnValue(mockDispatch);

    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpensePage history={history} />);
    wrapper.find(ExpenseForm).prop('onSubmit')(expenses[1]);

    expect(history.push).toHaveBeenLastCalledWith('/');
   expect(mockDispatch).toHaveBeenCalled()
  });
});
