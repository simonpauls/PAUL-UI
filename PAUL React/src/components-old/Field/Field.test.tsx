import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Field } from './Field';

describe('Field', () => {
  it('renders correctly', () => {
    render(<Field>Hello</Field>);
    expect(screen.getByText('Hello')).toBeDefined();
  });
});
