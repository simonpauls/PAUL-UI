import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Search } from './Search';

describe('Search', () => {
  it('renders correctly', () => {
    render(<Search />);
    expect(screen.getByRole('combobox')).toBeDefined();
  });
});
