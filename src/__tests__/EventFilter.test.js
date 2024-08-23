import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Filter from '../components/Filter';
import '@testing-library/jest-dom';

describe('EventFilter Component', () => {
  let mockSetFilters;
  const initialFilters = { eventType: 'all', category: 'all' };

  beforeEach(() => {
    mockSetFilters = jest.fn();
    render(<Filter filters={initialFilters} setFilters={mockSetFilters} />);
  });

  test('renders all filter options', () => {
    // Check for the options in the event type filter
    expect(screen.getByLabelText(/event type/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/category/i)).toBeInTheDocument();

    // Check for specific options in the event type filter
    expect(screen.getByText('All Events')).toBeInTheDocument();
    expect(screen.getByText('Upcoming')).toBeInTheDocument();
    expect(screen.getByText('Ongoing')).toBeInTheDocument();
    expect(screen.getByText('Past')).toBeInTheDocument();

    // Check for specific options in the category filter
    expect(screen.getByText('All Categories')).toBeInTheDocument();
    expect(screen.getByText('AI Challenge')).toBeInTheDocument();
    expect(screen.getByText('Tech Summit')).toBeInTheDocument();
  });

  test('calls setFilters prop when a filter is selected', () => {
    // Simulate changing the event type filter
    fireEvent.change(screen.getByLabelText(/event type/i), { target: { value: 'upcoming' } });

    // Retrieve the last call to the mock function
    const lastCall = mockSetFilters.mock.calls[mockSetFilters.mock.calls.length - 1];

    // Check if the function was called with a function
    const setFiltersFunction = lastCall[0];
    const updatedFilters = setFiltersFunction(initialFilters);

    expect(updatedFilters).toEqual(expect.objectContaining({
      eventType: 'upcoming',
    }));

    // Simulate changing the category filter
    fireEvent.change(screen.getByLabelText(/category/i), { target: { value: 'Tech Summit' } });

    // Retrieve the last call to the mock function again
    const lastCallAfterCategoryChange = mockSetFilters.mock.calls[mockSetFilters.mock.calls.length - 1];
    const setFiltersFunctionAfterCategoryChange = lastCallAfterCategoryChange[0];
    const updatedFiltersAfterCategoryChange = setFiltersFunctionAfterCategoryChange(initialFilters);

    expect(updatedFiltersAfterCategoryChange).toEqual(expect.objectContaining({
      category: 'Tech Summit',
    }));
  });
});
