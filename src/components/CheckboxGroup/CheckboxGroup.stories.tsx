import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { CheckboxGroup } from "./ChechboxGroup";

type CheckboxGroupProps = ComponentProps<typeof CheckboxGroup>;

const meta: Meta<typeof CheckboxGroup> = {
  title: "Checkbox/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    theme: {
      table: { disable: true },
    },
    options: {
      table: { disable: true },
    },
  },
};

export default meta;

type Story = StoryObj<CheckboxGroupProps>;

const options = [
  { label: "Москва", checked: true },
  { label: "Санкт-Петербург", checked: true },
  { label: "Екатеринбург", checked: false },
];

export const Vertical: Story = {
  args: {
    groupLabel: "Выберите город",
    orientation: "vertical",
    size: "s",
    theme: "light",
    options: options,
  },
};

export const Horizontal: Story = {
  args: {
    groupLabel: "Выберите город",
    orientation: "horizontal",
    size: "s",
    theme: "light",
    options: options,
  },
};

export const S: Story = {
  args: {
    groupLabel: "Выберите город",
    orientation: "vertical",
    size: "s",
    theme: "light",
    options: options,
  },
};

export const M: Story = {
  args: {
    groupLabel: "Выберите город",
    orientation: "vertical",
    size: "m",
    theme: "light",
    options: options,
  },
};

export const Light: Story = {
  args: {
    groupLabel: "Выберите город",
    orientation: "vertical",
    size: "s",
    theme: "light",
    options: options,
  },
};

export const Dark: Story = {
  args: {
    groupLabel: "Выберите город",
    orientation: "vertical",
    size: "s",
    theme: "dark",
    options: options,
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};
