import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ListBox, ListBoxItem } from './ListBox';

describe('ListBox', () => {
  it('renders correctly', () => {
    render(<ListBox><ListBoxItem>Hello</ListBoxItem></ListBox>);
    expect(screen.getByText('Hello')).toBeDefined();
  });
});
