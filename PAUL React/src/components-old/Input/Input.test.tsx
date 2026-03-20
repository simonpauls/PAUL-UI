import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input aria-label="input" />);
    expect(screen.getByLabelText('input')).toBeDefined();
  });
});
