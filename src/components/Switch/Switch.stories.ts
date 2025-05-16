import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Switch, ISwitchProps } from "./Switch";

const meta = {
  title: "Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onChange: fn() },
} satisfies Meta<ISwitchProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    label: "Toggle",
    theme: "light",
    size: "m",
    defaultChecked: false,
    disabled: false,
    checked: true,
  },
};

export const DefaultChecked: Story = {
  args: {
    label: "Toggle",
    theme: "light",
    size: "m",
    defaultChecked: true,
    disabled: false,
    checked: false,
  },
};

export const LightTheme: Story = {
  args: {
    label: "Toggle",
    theme: "light",
    size: "m",
    defaultChecked: false,
    checked: false,
    disabled: false,
  },
};

export const DarkTheme: Story = {
  args: {
    label: "Toggle",
    theme: "dark",
    size: "m",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const Disabled: Story = {
  args: {
    label: "Toggle",
    theme: "light",
    size: "m",
    disabled: true,
  },
};

export const LeftPosition: Story = {
  args: {
    label: "Toggle",
    theme: "light",
    size: "m",
    labelPosition: "left",
  },
};

export const RightPosition: Story = {
  args: {
    label: "Toggle",
    theme: "light",
    size: "m",
    labelPosition: "right",
  },
};

export const S: Story = {
  args: {
    label: "Toggle",
    theme: "light",
    size: "s",
  },
};

export const M: Story = {
  args: {
    label: "Toggle",
    theme: "light",
    size: "m",
  },
};
