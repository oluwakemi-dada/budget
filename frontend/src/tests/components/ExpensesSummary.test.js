import React from 'react';
import { shallow } from 'enzyme';
import * as reactRedux from 'react-redux';
import ExpensesSummary from '../../components/ExpensesSummary';
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

describe('ExpensesSummary with no expense', () => {
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

  test('should return 0 if no expense', () => {
    const wrapper = shallow(<ExpensesSummary />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('ExpensesSummary with a single expense', () => {
  beforeEach(() => {
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });

  afterEach(() => {
    useSelectorMock.mockClear();
  });

  const useSelectorMock = reactRedux.useSelector;

  const mockStore = {
    expenses: [expenses[2]],
    filters,
  };

  test('should correctly add up a single expense', () => {
    const wrapper = shallow(<ExpensesSummary />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('ExpensesSummary with multiple expenses', () => {
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

  test('should correctly add up multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary />);
    expect(wrapper).toMatchSnapshot();
  });
});
