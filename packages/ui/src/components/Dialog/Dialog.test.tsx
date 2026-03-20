import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Dialog } from './Dialog';

describe('Dialog', () => {
  it('renders correctly', () => {
    render(<Dialog>Hello</Dialog>);
    expect(screen.getByText('Hello')).toBeDefined();
  });
});
