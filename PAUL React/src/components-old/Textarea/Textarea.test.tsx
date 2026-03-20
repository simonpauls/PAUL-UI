import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Textarea } from './Textarea';

describe('Textarea', () => {
  it('renders correctly', () => {
    render(<Textarea aria-label="textarea" />);
    expect(screen.getByLabelText('textarea')).toBeDefined();
  });
});
