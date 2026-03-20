import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from './Headers';

describe('Header', () => {
  it('renders correctly', () => {
    render(<Header>Content</Header>);
    expect(screen.getByText('Content')).toBeDefined();
  });
});
