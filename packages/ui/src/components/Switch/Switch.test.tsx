import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Switch } from './Switch';

describe('Switch', () => {
  it('renders correctly', () => {
    const { container } = render(<Switch />);
    expect(container.firstChild).toHaveClass('switch');
  });
});
