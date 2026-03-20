import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SliderField } from './Slider';

describe('Slider', () => {
  it('renders correctly', () => {
    render(<SliderField label="slider" />);
    expect(screen.getByRole('slider')).toBeDefined();
  });
});
