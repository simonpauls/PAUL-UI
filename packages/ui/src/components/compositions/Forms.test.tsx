import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { FormBox } from './Forms';

describe('FormBox', () => {
  it('renders correctly', () => {
    render(
      <FormBox data-testid="form-box">
        <input name="test" />
      </FormBox>
    );
    const form = screen.getByTestId('form-box');
    expect(form.tagName).toBe('FORM');
    expect(form.style.display).toBe('flex');
    expect(form.style.flexDirection).toBe('column');
  });

  it('submits correctly', async () => {
    const onSubmit = vi.fn((e) => e.preventDefault());
    render(
      <FormBox onSubmit={onSubmit} data-testid="form-box">
        <button type="submit">Submit</button>
      </FormBox>
    );
    screen.getByText('Submit').click();
    expect(onSubmit).toHaveBeenCalled();
  });
});
