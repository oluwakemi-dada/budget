import React from 'react';
import * as reactRedux from 'react-redux';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

describe('ExpenseList with data', () => {
  beforeEach(() => {
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });

  afterEach(() => {
    useSelectorMock.mockClear();
  });

  const useSelectorMock = reactRedux.useSelector;

  const mockStore = {
    expenses,
    filters,
  };

  test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('ExpenseList with no data', () => {
  beforeEach(() => {
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });

  afterEach(() => {
    useSelectorMock.mockClear();
  });

  const useSelectorMock = reactRedux.useSelector;

  const mockStore = {
    expenses: [],
    filters,
  };

  test('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList />);
    expect(wrapper).toMatchSnapshot();
  });
});
