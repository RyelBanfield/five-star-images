import { render, screen } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);
  const helloWorld = screen.getByText(/Hello World/);
  expect(helloWorld).toBeInTheDocument();
});
