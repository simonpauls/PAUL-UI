import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Notification } from './Notification';

describe('Notification', () => {
  it('renders correctly', () => {
    render(<Notification>Hello</Notification>);
    expect(screen.getByText('Hello')).toBeDefined();
  });

  it('calls onDismiss when close button is clicked', () => {
    const onDismiss = vi.fn();
    render(<Notification isDismissible onDismiss={onDismiss}>Hello</Notification>);
    const closeButton = screen.getByLabelText('Dismiss notification');
    fireEvent.click(closeButton);
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });
});
