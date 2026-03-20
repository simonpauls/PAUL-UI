import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Accordion, AccordionItem } from './Accordion';

describe('Accordion', () => {
  it('renders correctly', () => {
    render(
      <Accordion>
        <AccordionItem title="Item 1">Content 1</AccordionItem>
      </Accordion>
    );
    expect(screen.getByText('Item 1')).toBeDefined();
    expect(screen.getByText('Content 1')).toBeDefined();
  });
});
