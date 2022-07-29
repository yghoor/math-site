/* eslint-disable no-unused-vars */
import renderer from 'react-test-renderer';

import Math from '../pages/Math.js';

test('renders "Math" page', () => {
  const tree = renderer
    .create(<Math />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});