import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EventsPage from '../pages/EventsPage';
import "@testing-library/jest-dom"

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Pagination in EventsPage', () => {
  test('renders pagination buttons', () => {
    render(
      <BrowserRouter>
        <EventsPage />
      </BrowserRouter>
    );

    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('disables Previous button on first page', () => {
    render(
      <BrowserRouter>
        <EventsPage />
      </BrowserRouter>
    );

    expect(screen.getByText('Previous')).toBeDisabled();
  });

  test('enables Next button and changes page', () => {
    render(
      <BrowserRouter>
        <EventsPage />
      </BrowserRouter>
    );

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);

    expect(screen.getByText('Previous')).not.toBeDisabled();
    expect(screen.getByText('2')).toHaveClass('bg-blue-500 text-white');
  });
});