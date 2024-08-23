import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Hero from '../components/Hero';
import "@testing-library/jest-dom"

describe('Hero Component', () => {
  test('renders Hero component with all elements', () => {
    render(
      <BrowserRouter>
        <Hero />
      </BrowserRouter>
    );

    // Check for the logo image
  const logoImage = screen.getByRole('img', { name: /YTN logo/i });
  expect(logoImage).toBeInTheDocument();

  // Check for the header text
  const headerText = screen.getByRole('heading', { name: /Welcome to Youth Tech Nexus/i });
  expect(headerText).toBeInTheDocument();

  // Check for the search input field
  const searchInput = screen.getByRole('textbox', { name: '' });
  expect(searchInput).toBeInTheDocument();

  // Check for the "Browse Events" link
  const browseEventsLink = screen.getByRole('link', { name: /Browse Events/i });
  expect(browseEventsLink).toBeInTheDocument();

//   const linkedinIcon = screen.getByRole('img', { name: /linkedin/ });
//   expect(linkedinIcon).toBeInTheDocument();

//   const instagramIcon = screen.getByRole('img', { name: /instagram/ });
//   expect(instagramIcon).toBeInTheDocument();

//   const facebookIcon = screen.getByRole('img', { name: /facebook/ });
//   expect(facebookIcon).toBeInTheDocument();

  // Check for the navigation links
  const homeLink = screen.getByRole('link', { name: /Home/i });
  expect(homeLink).toBeInTheDocument();
``
  const aboutUsLink = screen.getByRole('link', { name: /About Us/i });
  expect(aboutUsLink).toBeInTheDocument();

  // Check for buttons
  const signupButton = screen.getByRole('button', { name: /Sign up/i });
  expect(signupButton).toBeInTheDocument();

  const loginButton = screen.getByRole('button', { name: /Login/i });
  expect(loginButton).toBeInTheDocument();
  });
});
