import { default as React } from '../../../node_modules/react';
export interface Option {
    label: string;
    checked: boolean;
}
export interface CheckboxGroupProps {
    orientation: "vertical" | "horizontal";
    size: "s" | "m";
    theme: "light" | "dark";
    groupLabel?: string;
    options: Option[];
    onChange?: (options: Option[]) => void;
}
declare const CheckboxGroup: ({ theme, size, orientation, groupLabel, options, onChange, }: CheckboxGroupProps) => React.JSX.Element;
export { CheckboxGroup };
