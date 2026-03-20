import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Card, PricingCard } from './Cards';

// Mock useMediaQuery
vi.mock('../../../hooks', () => ({
  useMediaQuery: () => ({ isMobile: false }),
}));

describe('Card', () => {
  it('renders correctly', () => {
    render(
      <Card data-testid="card-root">
        Card Content
      </Card>
    );
    const root = screen.getByTestId('card-root');
    expect(root.classList.contains('card')).toBe(true);
    expect(screen.getByText('Card Content')).toBeDefined();
  });

  it('applies align and variant classes', () => {
    const { getByTestId } = render(
      <Card 
        align="center" 
        variant="brand" 
        data-testid="card-root"
      />
    );
    const root = getByTestId('card-root');
    expect(root.classList.contains('card-align-center')).toBe(true);
    expect(root.classList.contains('card-variant-brand')).toBe(true);
  });
});

describe('PricingCard', () => {
  it('renders pricing information', () => {
    render(
      <PricingCard 
        heading="Pro Plan" 
        price="19" 
        priceCurrency="$" 
        interval="mo" 
      />
    );
    expect(screen.getByText('Pro Plan')).toBeDefined();
    expect(screen.getByText('$')).toBeDefined();
    expect(screen.getByText('19')).toBeDefined();
    expect(screen.getByText('/mo')).toBeDefined();
  });
});
