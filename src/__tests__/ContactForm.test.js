import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactUs from '../components/ContactUs';
import "@testing-library/jest-dom"

describe('ContactUs Component', () => {
  test('renders ContactUs component', () => {
    render(<ContactUs />);

    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your first name...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your last name...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your message...')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  test('allows entering contact information', () => {
    render(<ContactUs />);

    fireEvent.change(screen.getByPlaceholderText('Enter your first name...'), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your last name...'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your email...'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your message...'), { target: { value: 'Test message' } });

    expect(screen.getByPlaceholderText('Enter your first name...').value).toBe('John');
    expect(screen.getByPlaceholderText('Enter your last name...').value).toBe('Doe');
    expect(screen.getByPlaceholderText('Enter your email...').value).toBe('john@example.com');
    expect(screen.getByPlaceholderText('Enter your message...').value).toBe('Test message');
  });

  test('submits the form with valid data', () => {
    render(<ContactUs />);

    fireEvent.change(screen.getByPlaceholderText('Enter your first name...'), { target: { value: 'John' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your last name...'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your email...'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your message...'), { target: { value: 'Test message' } });

    fireEvent.click(screen.getByText('Submit'));
  });
});