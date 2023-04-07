import { render, screen } from '@testing-library/react';
import App from './App';

test('renders let get started', () => {
  render(<App />);
  const linkElement = screen.getByText("let get started");
  expect(linkElement).toBeInTheDocument();
});
