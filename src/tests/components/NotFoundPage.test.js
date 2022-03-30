import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

test('should render NotFoundPage correctly', () => {
  const wrapper = shallow(
    <div>
      404! - <Link to='/'>Go home</Link>
    </div>
  );
  expect(wrapper).toMatchSnapshot();
});
