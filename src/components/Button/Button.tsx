import React from "react";
import { FC } from "react";
import "./Button.scss";

export interface IButtonProps {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'small' | 'medium' | 'large';
    title: string;
    onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
    title,
    variant = 'secondary',
    size = 'meduim',
    onClick = () => { },
    ...props
}) => {
    return (
        <button {...props} className={`button button--${variant} button--${size}`} onClick={onClick}>
            <span>
                {title}
            </span>
        </button>
    )
}

export default Button;