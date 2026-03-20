import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Menu, MenuItem } from './Menu';

describe('Menu', () => {
  it('renders correctly', () => {
    render(<Menu><MenuItem>Hello</MenuItem></Menu>);
    expect(screen.getByText('Hello')).toBeDefined();
  });
});
