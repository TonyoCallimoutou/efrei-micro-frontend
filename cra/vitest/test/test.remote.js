import { render, screen } from '@testing-library/react';

test('renders the button with the correct label', () => {
  render(<Button label="Click me" />);
  const buttonElement = screen.getByText(/Click me/i);
  expect(buttonElement).toBeInTheDocument();
});