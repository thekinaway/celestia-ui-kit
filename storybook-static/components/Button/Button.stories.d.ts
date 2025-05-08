import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('../../../node_modules/react').FC<import('./Button').IButtonProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
    args: {
        onClick: import('@vitest/spy').Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Primary: Story;
export declare const Secondary: Story;
export declare const Outline: Story;
export declare const Small: Story;
export declare const Meduim: Story;
export declare const Large: Story;
