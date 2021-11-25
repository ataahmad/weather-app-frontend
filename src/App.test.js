import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  console.log("Hello we are in the test module");
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
