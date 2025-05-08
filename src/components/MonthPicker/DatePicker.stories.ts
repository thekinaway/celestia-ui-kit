import type { Meta, StoryObj } from '@storybook/react';
import DatePicker from './DatePicker';

const meta = {
  title: 'Example/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
  },
  args: {  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    setMonth: (month: number) => console.log(month),
    month: new Date().getMonth(),
    // setYear: (year: number) => console.log(year),
    // year: new Date().getFullYear(),
  },
};