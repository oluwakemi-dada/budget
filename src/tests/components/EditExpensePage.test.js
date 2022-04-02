import React from 'react';
import { shallow } from 'enzyme';
import * as reactRedux from 'react-redux';
import EditExpensePage from '../../components/EditExpensePage';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

test('should render EditExpensePage', () => {
  const history = { push: jest.fn() };
  const match = { params: { id: 1 } };
  const wrapper = shallow(<EditExpensePage history={history} match={match} />);
  expect(wrapper).toMatchSnapshot();
});
