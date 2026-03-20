import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Grid, GridItem } from './Grid';

describe('Grid', () => {
  it('renders correctly', () => {
    render(
      <Grid data-testid="grid-container">
        <div>Item 1</div>
        <div>Item 2</div>
      </Grid>
    );
    const container = screen.getByTestId('grid-container');
    expect(container).toBeDefined();
    expect(container.classList.contains('grid')).toBe(true);
    expect(screen.getByText('Item 1')).toBeDefined();
    expect(screen.getByText('Item 2')).toBeDefined();
  });

  it('applies gap and alignment classes', () => {
    const { getByTestId } = render(
      <Grid 
        gap="400" 
        justifyItems="center" 
        alignItems="end" 
        data-testid="grid-container"
      />
    );
    const container = getByTestId('grid-container');
    expect(container.classList.contains('grid-gap-400')).toBe(true);
    expect(container.classList.contains('grid-justify-items-center')).toBe(true);
    expect(container.classList.contains('grid-align-items-end')).toBe(true);
  });
});

describe('GridItem', () => {
  it('renders with grid style', () => {
    render(
      <GridItem 
        column="span 2" 
        row="1" 
        data-testid="grid-item"
      >
        Content
      </GridItem>
    );
    const item = screen.getByTestId('grid-item');
    expect(item.style.gridColumn).toBe('span 2');
    expect(item.style.gridRow).toBe('1');
  });
});
