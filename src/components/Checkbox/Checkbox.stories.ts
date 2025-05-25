import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, ICheckboxProps } from "./Checkbox";

const meta: Meta<ICheckboxProps> = {
  title: "Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    label: "Get Started",
    theme: "light",
    size: "s",
    checked: true,
  },
};

export const Unchecked: Story = {
  args: {
    label: "Get Started",
    theme: "light",
    size: "s",
    checked: false,
  },
};

export const LightTheme: Story = {
  args: {
    label: "Get Started",
    theme: "light",
    size: "s",
  },
};

export const DarkTheme: Story = {
  args: {
    label: "Get Started",
    theme: "dark",
    size: "s",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const S: Story = {
  args: {
    label: "Get Started",
    theme: "light",
    size: "s",
  },
};

export const M: Story = {
  args: {
    label: "Get Started",
    theme: "light",
    size: "m",
  },
};
