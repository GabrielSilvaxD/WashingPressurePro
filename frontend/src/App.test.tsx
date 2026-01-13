import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation buttons', () => {
  render(<App />);
  const homeButton = screen.getByRole('button', { name: /home/i });
  const servicesButton = screen.getByRole('button', { name: /services/i });
  expect(homeButton).toBeInTheDocument();
  expect(servicesButton).toBeInTheDocument();
});

test('renders hero section with CTA button', () => {
  render(<App />);
  const ctaButton = screen.getByRole('button', { name: /get a free quote/i });
  expect(ctaButton).toBeInTheDocument();
});

test('renders services section', () => {
  render(<App />);
  const servicesHeading = screen.getByRole('heading', { name: /our services/i });
  expect(servicesHeading).toBeInTheDocument();
});

test('renders contact form', () => {
  render(<App />);
  const nameInput = screen.getByLabelText(/name \*/i);
  const emailInput = screen.getByLabelText(/email \*/i);
  const sendButton = screen.getByRole('button', { name: /send message/i });
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(sendButton).toBeInTheDocument();
});
