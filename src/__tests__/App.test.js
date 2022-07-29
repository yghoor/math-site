/* eslint-disable no-unused-vars */
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import App from '../App.js';

describe('App', () => {
  test('renders App', () => {
    const tree = renderer
      .create(<App />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('renders "Home" page by default', () => {
    render(<App />);

    const homePageHeader = screen.getByRole('heading', { name: 'Welcome to our page!' });

    expect(homePageHeader).toBeInTheDocument();
  });
});
