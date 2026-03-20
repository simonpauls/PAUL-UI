import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Tab, TabList, TabPanel, Tabs } from './Tab';

describe('Tab', () => {
  it('renders correctly', () => {
    render(<Tabs><TabList><Tab>Hello</Tab></TabList><TabPanel>Content</TabPanel></Tabs>);
    expect(screen.getByText('Hello')).toBeDefined();
  });
});
