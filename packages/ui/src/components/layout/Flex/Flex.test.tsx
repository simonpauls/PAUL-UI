import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Flex, FlexItem } from './Flex';

describe('Flex', () => {
  it('renders correctly', () => {
    render(
      <Flex data-testid="flex-container">
        <div>Item 1</div>
        <div>Item 2</div>
      </Flex>
    );
    const container = screen.getByTestId('flex-container');
    expect(container).toBeDefined();
    expect(container.classList.contains('flex')).toBe(true);
    expect(screen.getByText('Item 1')).toBeDefined();
    expect(screen.getByText('Item 2')).toBeDefined();
  });

  it('applies direction and alignment classes', () => {
    const { getByTestId } = render(
      <Flex 
        direction="column" 
        alignPrimary="center" 
        alignSecondary="end" 
        data-testid="flex-container"
      />
    );
    const container = getByTestId('flex-container');
    expect(container.classList.contains('flex-direction-column')).toBe(true);
    expect(container.classList.contains('flex-align-primary-center')).toBe(true);
    expect(container.classList.contains('flex-align-secondary-end')).toBe(true);
  });
});

describe('FlexItem', () => {
  it('renders with size class', () => {
    render(
      <FlexItem size="major" data-testid="flex-item">
        Content
      </FlexItem>
    );
    const item = screen.getByTestId('flex-item');
    expect(item.classList.contains('flex-item')).toBe(true);
    expect(item.classList.contains('flex-item-size-major')).toBe(true);
  });
});
