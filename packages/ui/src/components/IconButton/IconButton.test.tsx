import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('renders correctly', () => {
    render(<IconButton aria-label="icon button" />);
    expect(screen.getByLabelText('icon button')).toBeDefined();
  });
});
