import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Section } from './Section';

describe('Section', () => {
  it('renders correctly as a section', () => {
    const { container } = render(
      <Section data-testid="section-root">
        Content
      </Section>
    );
    const root = screen.getByTestId('section-root');
    expect(root.tagName).toBe('SECTION');
    expect(root.classList.contains('section')).toBe(true);
    expect(screen.getByText('Content')).toBeDefined();
  });

  it('renders correctly as a header', () => {
    const { container } = render(
      <Section elementType="header" data-testid="header-root">
        Content
      </Section>
    );
    const root = screen.getByTestId('header-root');
    expect(root.tagName).toBe('HEADER');
  });

  it('applies variant and padding classes', () => {
    const { getByTestId } = render(
      <Section 
        variant="brand" 
        padding="800" 
        data-testid="section-root"
      />
    );
    const root = getByTestId('section-root');
    expect(root.classList.contains('section-variant-brand')).toBe(true);
    expect(root.classList.contains('section-padding-top-800')).toBe(true);
    expect(root.classList.contains('section-padding-bottom-800')).toBe(true);
  });
});
