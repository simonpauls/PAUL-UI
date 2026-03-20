import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Tooltip } from './Tooltip';
import { TooltipTrigger, Button } from 'react-aria-components';

describe('Tooltip', () => {
  it('renders correctly', () => {
    render(
      <TooltipTrigger isOpen>
        <Button>Trigger</Button>
        <Tooltip>Hello</Tooltip>
      </TooltipTrigger>
    );
    expect(screen.getByText('Hello')).toBeDefined();
  });
});
