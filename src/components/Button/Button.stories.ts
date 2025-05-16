import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button, { IButtonProps } from "./Button";

const meta: Meta<IButtonProps> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Get Started",
    variant: "primary",
    size: "medium",
  },
};

export const Text: Story = {
  args: {
    title: "Get Started",
    variant: "text",
    size: "medium",
  },
};

export const Outline: Story = {
  args: {
    title: "Get Started",
    variant: "outline",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    title: "Get Started",
    variant: "primary",
    size: "small",
  },
};

export const Meduim: Story = {
  args: {
    title: "Get Started",
    variant: "primary",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    title: "Get Started",
    variant: "primary",
    size: "large",
  },
};
