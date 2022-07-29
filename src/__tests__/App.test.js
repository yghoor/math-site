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

describe('Navbar component', () => {
  test('renders navbar header', () => {
    render(<App />);

    const navHeader = screen.getByRole('heading', { name: 'Math Magicians' });

    expect(navHeader).toBeInTheDocument();
  });

  test('renders navbar links', () => {
    render(<App />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const mathLink = screen.getByRole('link', { name: 'Calculator' });
    const quoteLink = screen.getByRole('link', { name: 'Quote' });

    expect(homeLink).toBeInTheDocument();
    expect(mathLink).toBeInTheDocument();
    expect(quoteLink).toBeInTheDocument();
  });

  test('"Home" link works', () => {
    render(<App />);
    const homeLink = screen.getByRole('link', { name: 'Home' });

    userEvent.click(homeLink);
    const homePageHeader = screen.getByRole('heading', { name: 'Welcome to our page!' });

    expect(homePageHeader).toBeInTheDocument();
  });

  test('"Calculator" link works', () => {
    render(<App />);
    const mathLink = screen.getByRole('link', { name: 'Calculator' });

    userEvent.click(mathLink);
    const calculatorPageHeader = screen.getByRole('heading', { name: 'Let\'s do some math!' });

    expect(calculatorPageHeader).toBeInTheDocument();
  });

  test('"Quote" link works', () => {
    const { container } = render(<App />);
    const quoteLink = screen.getByRole('link', { name: 'Quote' });

    userEvent.click(quoteLink);
    const quotePageDiv = container.getElementsByClassName('quote-page')[0];

    expect(quotePageDiv).toBeInTheDocument();
  });
});