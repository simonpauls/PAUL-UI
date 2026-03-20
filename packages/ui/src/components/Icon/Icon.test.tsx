import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Icon } from './Icon';

describe('Icon', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Icon size="24">
        <path d="M8 8H16V16H8V8Z" fill="currentColor" />
      </Icon>
    );
    const svg = container.querySelector('svg');
    expect(svg).toBeDefined();
    expect(svg?.getAttribute('width')).toBe('24');
    expect(svg?.getAttribute('height')).toBe('24');
  });

  it('applies the correct size class', () => {
    const { container } = render(<Icon size="32" />);
    const svg = container.querySelector('svg');
    expect(svg?.classList.contains('icon-size-32')).toBe(true);
  });
});
