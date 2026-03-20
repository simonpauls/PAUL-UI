import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Logo } from './Logo';

describe('Logo', () => {
  it('renders correctly', () => {
    render(<Logo />);
    expect(screen.getByLabelText(/logo/i)).toBeDefined();
  });
});
