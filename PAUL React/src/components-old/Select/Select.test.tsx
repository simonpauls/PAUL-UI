import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SelectField, SelectItem } from './Select';

describe('Select', () => {
  it('renders correctly', () => {
    render(<SelectField label="select"><SelectItem>Hello</SelectItem></SelectField>);
    expect(screen.getByText('Hello')).toBeDefined();
  });
});
