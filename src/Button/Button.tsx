import React from "react";
import { FC } from "react";
import "./Button.scss";

export interface IButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'large' | 'default';
    children?: React.ReactNode;
    onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
    children,
    variant = 'secondary',
    size = 'default',
    onClick = () => { },
    ...props
}) => {
    return (
        <button {...props} className={`button button--${variant} button--${size}`} onClick={onClick}>
            <span>
                {children}
            </span>
        </button>
    )
}

export default Button;