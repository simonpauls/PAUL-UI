import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from './Footers';

describe('Footer', () => {
  it('renders correctly', () => {
    render(<Footer />);
    expect(screen.getByText(/Use cases/i)).toBeDefined();
  });
});
