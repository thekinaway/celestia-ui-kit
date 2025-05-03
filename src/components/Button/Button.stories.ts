import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Get Started',
    variant: 'primary',
    size: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Get Started',
    variant: 'secondary',
    size: 'default',
  },
};

export const Outline: Story = {
  args: {
    children: 'Get Started',
    variant: 'outline',
    size: 'default',
  },
};

export const Small: Story = {
  args: {
    children: 'Get Started',
    variant: 'primary',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    children: 'Get Started',
    variant: 'primary',
    size: 'large',
  },
};