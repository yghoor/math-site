/* eslint-disable no-unused-vars */
import renderer from 'react-test-renderer';

import Home from '../pages/Home.js';

test('renders "Home" page', () => {
  const tree = renderer
    .create(<Home />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});