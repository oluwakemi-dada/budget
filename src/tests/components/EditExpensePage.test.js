import React from 'react';
import { shallow } from 'enzyme';
import * as reactRedux from 'react-redux';
import EditExpensePage from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('edit expense actions', () => {
  beforeEach(() => {
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });

  afterEach(() => {
    useSelectorMock.mockClear();
  });

  const useSelectorMock = reactRedux.useSelector;

  const mockStore = {
    expenses,
  };

  test('should render EditExpensePage with expense data', () => {
    const history = { push: jest.fn() };
    const match = { params: { id: '1' } };
    const wrapper = shallow(
      <EditExpensePage history={history} match={match} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should handle editExpense', () => {});
});
