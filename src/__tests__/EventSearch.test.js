import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { EventData } from '../data/EventData';
import "@testing-library/jest-dom"

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('SearchBar Component', () => {
  test('renders SearchBar component', () => {
    render(
      <BrowserRouter>
        <SearchBar height="h-[3.5rem]" listTopMargin="mt-[400px]" />
      </BrowserRouter>
    );

    // Check for the search input
    expect(screen.getByPlaceholderText('Search Events...')).toBeInTheDocument();
  });

  test('filters events based on search input', () => {
    render(
      <BrowserRouter>
        <SearchBar height="h-[3.5rem]" listTopMargin="mt-[400px]" />
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText('Search Events...');
    fireEvent.change(searchInput, { target: { value: 'Tech' } });

    const filteredEvents = EventData.filter(event => 
      event.name.toLowerCase().includes('tech')
    );

    filteredEvents.forEach(event => {
      expect(screen.getByText(event.name)).toBeInTheDocument();
    });
  });
});