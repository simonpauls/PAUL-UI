import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hero } from './Heroes';

describe('Hero', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Hero data-testid="hero-root">
        Hero Content
      </Hero>
    );
    const root = screen.getByTestId('hero-root');
    expect(root.tagName).toBe('SECTION');
    expect(root.classList.contains('section')).toBe(true);
    expect(screen.getByText('Hero Content')).toBeDefined();
  });

  it('renders with correct default padding', () => {
    const { getByTestId } = render(<Hero data-testid="hero-root" />);
    const root = getByTestId('hero-root');
    expect(root.classList.contains('section-padding-top-1600')).toBe(true);
    expect(root.classList.contains('section-padding-bottom-1600')).toBe(true);
  });
});
