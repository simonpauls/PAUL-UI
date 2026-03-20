import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders correctly', () => {
    render(<Avatar src="https://i.pravatar.cc/300" alt="Avatar" />);
    expect(screen.getByAltText('Avatar')).toBeDefined();
  });
});
