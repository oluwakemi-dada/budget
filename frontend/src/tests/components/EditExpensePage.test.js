import React from 'react';
import { shallow } from 'enzyme';
import * as reactRedux from 'react-redux';
import moment from 'moment';
import EditExpensePage from '../../components/EditExpensePage';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import {
  EDIT_EXPENSE,
  REMOVE_EXPENSE,
} from '../../constants/expensesConstants';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('edit expense actions', () => {
  let history, match;
  
  beforeEach(() => {
    history = { push: jest.fn() };
    match = { params: { id: '1' } };
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
    useDispatchMock.mockImplementation(() => () => {});
  });

  afterEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
  });

  const useSelectorMock = reactRedux.useSelector;
  const useDispatchMock = reactRedux.useDispatch;

  const mockStore = {
    expenses,
  };

  test('should render EditExpensePage with expense data', () => {
    const wrapper = shallow(
      <EditExpensePage history={history} match={match} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle onSubmitHandler on editExpensePage correctly', () => {
    const mockDispatch = jest.fn();
    const mockUseDispatch = jest.spyOn(reactRedux, 'useDispatch');
    mockUseDispatch.mockReturnValue(mockDispatch);

    const updatedExpense = {
      description: 'Outfits shopping',
      note: 'Man needs to be pampered',
      amount: 120000,
      createdAt: moment(0).add(4000, 'days'),
    };

    const wrapper = shallow(
      <EditExpensePage history={history} match={match} />
    );

    wrapper.find(ExpenseForm).prop('onSubmit')(updatedExpense);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(mockDispatch).toHaveBeenLastCalledWith({
      type: EDIT_EXPENSE,
      payload: {
        id: '1',
        updates: { ...updatedExpense },
      },
    });
  });

  test('should handle onRemoveHandler on editExpensePage correctly', () => {
    const mockDispatch = jest.fn();
    const mockUseDispatch = jest.spyOn(reactRedux, 'useDispatch');
    mockUseDispatch.mockReturnValue(mockDispatch);

    const wrapper = shallow(
      <EditExpensePage history={history} match={match} />
    );

    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(mockDispatch).toHaveBeenLastCalledWith({
      type: REMOVE_EXPENSE,
      payload: '1',
    });
  });
});
