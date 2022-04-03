import React from 'react';
import { shallow } from 'enzyme';
import * as reactRedux from 'react-redux';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
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

  test('should handle text change', () => {
    const mockDispatch = jest.fn();
    const mockUseDispatch = jest.spyOn(reactRedux, 'useDispatch');
    mockUseDispatch.mockReturnValue(mockDispatch);

    const value = 'card';
    const wrapper = shallow(<ExpenseListFilter />);
    wrapper.find('input').at(0).simulate('change', { target: { value } });
    expect(mockDispatch).toHaveBeenLastCalledWith({
      type: SET_TEXT_FILTER,
      payload: value,
    });
  });

  test('should sort by amount', () => {
    const mockDispatch = jest.fn();
    const mockUseDispatch = jest.spyOn(reactRedux, 'useDispatch');
    mockUseDispatch.mockReturnValue(mockDispatch);

    const value = 'amount';
    const wrapper = shallow(<ExpenseListFilter />);
    wrapper.find('select').simulate('change', {
      target: {
        value,
      },
    });
    expect(mockDispatch).toHaveBeenLastCalledWith({
      type: SORT_BY_AMOUNT,
    });
  });

  test('should handle date changes', () => {
    const mockDispatch = jest.fn();
    const mockUseDispatch = jest.spyOn(reactRedux, 'useDispatch');
    mockUseDispatch.mockReturnValue(mockDispatch);

    const dates = {
      startDate: moment(0),
      endDate: moment(0).add(3, 'days'),
    };
    const wrapper = shallow(<ExpenseListFilter />);
    wrapper.find(DateRangePicker).prop('onDatesChange')(dates);
    expect(mockDispatch).toHaveBeenLastCalledWith({
      type: SET_START_DATE,
      payload: dates.startDate,
      type: SET_END_DATE,
      payload: dates.endDate,
    });
  });
});

describe('ExpenseListFilters with alt filters data', () => {
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
    filters: altFilters,
  };

  test('should render ExpenseListFilters with alt data  correctly', () => {
    const wrapper = shallow(<ExpenseListFilter />);
    expect(wrapper).toMatchSnapshot();
  });

  test('should sort by date', () => {
    const mockDispatch = jest.fn();
    const mockUseDispatch = jest.spyOn(reactRedux, 'useDispatch');
    mockUseDispatch.mockReturnValue(mockDispatch);

    const value = 'date';
    const wrapper = shallow(<ExpenseListFilter />);
    wrapper.find('select').simulate('change', {
      target: {
        value,
      },
    });
    expect(mockDispatch).toHaveBeenLastCalledWith({
      type: SORT_BY_DATE,
    });
  });
});
