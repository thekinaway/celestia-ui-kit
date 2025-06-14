import React from "react";
import { FC } from "react";

import styles from "./Button.module.scss";

export interface IButtonProps {
  variant?: "primary" | "text" | "outline";
  size?: "small" | "medium" | "large";
  title: string;
  onClick?: () => void;
  icon?: string;
  className?: string;
}

const Button: FC<IButtonProps> = ({
  title,
  variant = "text",
  size = "meduim",
  onClick = () => {},
  icon,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${styles.button} ${styles[`button--${variant}`]} ${styles[`button--${size}`]} ${className || ""}`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="Button icon" />}
      <span>{title}</span>
    </button>
  );
};

export default Button;
