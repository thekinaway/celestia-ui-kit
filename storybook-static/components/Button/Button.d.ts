import { FC } from '../../../node_modules/react';
export interface IButtonProps {
    variant?: "primary" | "text" | "outline";
    size?: "small" | "medium" | "large";
    title: string;
    onClick?: () => void;
    icon?: string;
    className?: string;
}
declare const Button: FC<IButtonProps>;
export default Button;
