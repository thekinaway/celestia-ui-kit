import { default as React, FC } from '../../../node_modules/react';
export interface IButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'large' | 'default';
    children?: React.ReactNode;
    onClick?: () => void;
}
declare const Button: FC<IButtonProps>;
export default Button;
