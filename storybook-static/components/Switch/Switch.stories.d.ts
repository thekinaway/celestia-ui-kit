import { StoryObj } from '@storybook/react';
import { ISwitchProps } from './Switch';
declare const meta: {
    title: string;
    component: import('../../../node_modules/react').FC<ISwitchProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
    args: {
        onChange: import('@vitest/spy').Mock<(...args: any[]) => any>;
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Checked: Story;
export declare const DefaultChecked: Story;
export declare const LightTheme: Story;
export declare const DarkTheme: Story;
export declare const Disabled: Story;
export declare const LeftPosition: Story;
export declare const RightPosition: Story;
export declare const S: Story;
export declare const M: Story;
