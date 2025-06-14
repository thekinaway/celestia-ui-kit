import type { Meta, StoryObj } from "@storybook/react";

import ViewSwitcher, { IViewSwitcherProps } from "./ViewSwitcher";

const meta = {
  title: "ViewSwitcher/ViewSwitcher",
  component: ViewSwitcher,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<IViewSwitcherProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const S: Story = {
  args: {
    onClickLeft: () => console.log("Left clicked"),
    onClickRight: () => console.log("Right clicked"),
    setIsOpen: (isOpen: boolean) => console.log(`Is open: ${isOpen}`),
    isOpen: false,
    children: "Default content",
  },
};
