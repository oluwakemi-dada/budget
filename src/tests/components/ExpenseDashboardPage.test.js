import React from 'react';
import { shallow } from 'enzyme';
import ExpenseList from '../../components/ExpenseList';
import ExpenseListFilter from '../../components/ExpenseListFilters';
import ExpensesSummary from '../../components/ExpensesSummary';

test('should render ExpenseDashboardPage correctly', () => {
  const wrapper = shallow(
    <div>
      <ExpensesSummary />
      <ExpenseListFilter />
      <ExpenseList />
    </div>
  );
  expect(wrapper).toMatchSnapshot();
});
