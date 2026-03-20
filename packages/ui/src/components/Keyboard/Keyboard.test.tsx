import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Keyboard } from './Keyboard';

describe('Keyboard', () => {
  it('renders correctly', () => {
    render(<Keyboard>Hello</Keyboard>);
    expect(screen.getByText('H')).toBeDefined();
    expect(screen.getByText('e')).toBeDefined();
    expect(screen.getAllByText('l')[0]).toBeDefined();
    expect(screen.getAllByText('l')[1]).toBeDefined();
    expect(screen.getByText('o')).toBeDefined();
  });
});
