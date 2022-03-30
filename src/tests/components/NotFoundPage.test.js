import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import NotFoundPage from '../../components/NotFoundPage';

test('should render NotFoundPage correctly', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
