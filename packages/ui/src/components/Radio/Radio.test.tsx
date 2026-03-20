import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Radio } from './Radio';

describe('Radio', () => {
  it('renders correctly', () => {
    const { container } = render(<Radio />);
    expect(container.firstChild).toHaveClass('radio');
  });
});
