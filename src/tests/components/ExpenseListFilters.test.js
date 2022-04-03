import React from 'react';
import { shallow } from 'enzyme';
import * as reactRedux from 'react-redux';
import ExpenseListFilter from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import {
  SET_START_DATE,
  SET_END_DATE,
  SET_TEXT_FILTER,
  SORT_BY_DATE,
  SORT_BY_AMOUNT,
} from '../../constants/filtersConstants';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('ExpenseListFilters with filters data', () => {
  beforeEach(() => {
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
    filters,
  };

  test('should render ExpenseListFilters correctly', () => {
    const wrapper = shallow(<ExpenseListFilter />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should render ExpenseListFilters with alt data  correctly', () => {
    const wrapper = shallow(<ExpenseListFilter />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('ExpenseListFilters with alt filters data', () => {
  beforeEach(() => {
    useSelectorMock.mockImplementation((selector) => selector(mockStore));
  });

  afterEach(() => {
    useSelectorMock.mockClear();
  });

  const useSelectorMock = reactRedux.useSelector;

  const mockStore = {
    filters: altFilters,
  };

  test('should render ExpenseListFilters with alt data  correctly', () => {
    const wrapper = shallow(<ExpenseListFilter />);
    expect(wrapper).toMatchSnapshot();
  });
});
