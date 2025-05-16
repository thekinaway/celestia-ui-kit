import { default as React, FC } from '../../../node_modules/react';
export interface ISwitchProps {
    defaultChecked?: boolean;
    checked?: boolean;
    disabled?: boolean;
    size: "s" | "m";
    label?: string;
    labelPosition?: "left" | "right";
    theme: "light" | "dark";
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export declare const Switch: FC<ISwitchProps>;
