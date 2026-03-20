import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Text } from './Text';

describe('Text', () => {
  it('renders correctly', () => {
    render(<Text>Hello</Text>);
    expect(screen.getByText('Hello')).toBeDefined();
  });
});
