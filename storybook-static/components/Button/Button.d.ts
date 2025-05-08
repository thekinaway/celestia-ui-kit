import { FC } from '../../../node_modules/react';
export interface IButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    title: string;
    onClick?: () => void;
}
declare const Button: FC<IButtonProps>;
export default Button;
