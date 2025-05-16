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
export declare const LightTheme: Story;
export declare const DarkTheme: Story;
export declare const Disabled: Story;
export declare const Position: Story;
export declare const S: Story;
export declare const M: Story;
