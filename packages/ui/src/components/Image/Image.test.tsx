import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Image } from './Image';

describe('Image', () => {
  it('renders correctly', () => {
    render(<Image src="https://i.pravatar.cc/300" alt="Image" />);
    expect(screen.getByAltText('Image')).toBeDefined();
  });
});
