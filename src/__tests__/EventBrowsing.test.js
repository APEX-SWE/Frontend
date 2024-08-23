import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EventOverview from '../components/EventOverview';
import { EventData } from '../data/EventData';
import "@testing-library/jest-dom"

describe('EventOverview Component', () => {
  test('renders EventOverview component with correct number of events', () => {
    render(
      <BrowserRouter>
        <EventOverview />
      </BrowserRouter>
    );

    const eventCards = screen.getAllByRole('link');
    expect(eventCards).toHaveLength(10);
  });

  test('displays correct event information', () => {
    render(
      <BrowserRouter>
        <EventOverview />
      </BrowserRouter>
    );

    const firstEvent = EventData[0];
    expect(screen.getByText(firstEvent.name)).toBeInTheDocument();
    expect(screen.getByText(firstEvent.category)).toBeInTheDocument();
    expect(screen.getByText(firstEvent.duration)).toBeInTheDocument();
  });

  test('contains "View All Events" button', () => {
    render(
      <BrowserRouter>
        <EventOverview />
      </BrowserRouter>
    );

    expect(screen.getByText('View All Events')).toBeInTheDocument();
  });
});