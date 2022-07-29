/* eslint-disable no-unused-vars */
import renderer from 'react-test-renderer';

import Quote from '../pages/Quote.js';

test('renders "Quote" page', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});