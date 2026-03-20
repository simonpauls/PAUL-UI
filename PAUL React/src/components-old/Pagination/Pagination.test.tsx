import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  it('renders correctly', () => {
    render(<Pagination />);
    expect(screen.getByLabelText('Page navigation')).toBeDefined();
  });
});
