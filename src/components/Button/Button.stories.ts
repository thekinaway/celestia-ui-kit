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
    title: 'Get Started',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    title: 'Get Started',
    variant: 'secondary',
    size: 'medium',
  },
};

export const Outline: Story = {
  args: {
    title: 'Get Started',
    variant: 'outline',
    size: 'medium',
  },
};

export const Small: Story = {
  args: {
    title: 'Get Started',
    variant: 'primary',
    size: 'small',
  },
};

export const Meduim: Story = {
  args: {
    title: 'Get Started',
    variant: 'primary',
    size: 'medium',
  },
};


export const Large: Story = {
  args: {
    title: 'Get Started',
    variant: 'primary',
    size: 'large',
  },
};