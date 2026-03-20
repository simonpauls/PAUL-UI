import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Navigation, NavigationPill } from './Navigation';

describe('Navigation', () => {
  it('renders correctly', () => {
    render(<Navigation><NavigationPill>Hello</NavigationPill></Navigation>);
    expect(screen.getByText('Hello')).toBeDefined();
  });
});
