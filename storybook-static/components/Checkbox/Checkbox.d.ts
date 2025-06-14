import { default as React } from '../../../node_modules/react';
export interface ICheckboxProps {
    size: "s" | "m";
    theme: "light" | "dark";
    label?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}
export declare const Checkbox: React.MemoExoticComponent<({ size, theme, label, checked, onChange, }: ICheckboxProps) => React.JSX.Element>;
