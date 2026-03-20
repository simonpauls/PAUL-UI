import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Tag } from './Tag';

describe('Tag', () => {
  it('renders correctly', () => {
    render(<Tag>Hello</Tag>);
    expect(screen.getByText('Hello')).toBeDefined();
  });
});
