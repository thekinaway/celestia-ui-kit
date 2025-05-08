import { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: import('../../../node_modules/react').FC<import('./DatePicker').IDatePickerProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {};
    args: {};
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
