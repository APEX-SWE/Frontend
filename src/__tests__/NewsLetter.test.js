import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewsTeller from '../components/NewsTeller';
import "@testing-library/jest-dom"

describe('NewsTeller Component', () => {
  test('renders NewsTeller component', () => {
    render(<NewsTeller />);

    expect(screen.getByText('SUBSCRIBE NOW!')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email...')).toBeInTheDocument();
    expect(screen.getByText('Subscribe')).toBeInTheDocument();
  });

  test('allows entering an email', () => {
    render(<NewsTeller />);

    const emailInput = screen.getByPlaceholderText('Enter your email...');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

    expect(emailInput.value).toBe('test@example.com');
  });

  // Note: You would need to implement the subscription functionality to test it fully
  test('clicking subscribe button with valid email', () => {
    render(<NewsTeller />);

    const emailInput = screen.getByPlaceholderText('Enter your email...');
    const subscribeButton = screen.getByText('Subscribe');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(subscribeButton);
  });
});