import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Table, TableBody, TableCell, TableHead, TableColumn, TableRow } from './Table';

describe('Table', () => {
  it('renders correctly', () => {
    render(<Table><TableHead><TableRow><TableColumn>Hello</TableColumn></TableRow></TableHead><TableBody><TableRow><TableCell>World</TableCell></TableRow></TableBody></Table>);
    expect(screen.getByText('Hello')).toBeDefined();
  });
});
