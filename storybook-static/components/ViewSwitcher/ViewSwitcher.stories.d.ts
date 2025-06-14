import { StoryObj } from '@storybook/react';
import { IViewSwitcherProps } from './ViewSwitcher';
declare const meta: {
    title: string;
    component: import('../../../node_modules/react').FC<IViewSwitcherProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const S: Story;
