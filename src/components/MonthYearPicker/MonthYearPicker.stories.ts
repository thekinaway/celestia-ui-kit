import type { Meta, StoryObj } from "@storybook/react";

import MonthYearPicker from "./MonthYearPicker";

const meta = {
  title: "MonthYearPicker/MonthYearPicker",
  component: MonthYearPicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof MonthYearPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    setMonth: (month: number) => console.log(month),
    month: new Date().getMonth(),
    setYear: (year: number) => console.log(year),
    year: new Date().getFullYear(),
  },
};
