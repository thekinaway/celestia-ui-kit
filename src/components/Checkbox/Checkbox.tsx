import React from "react";
import styles from "./Checkbox.module.scss";
import clsx from "clsx";
import "@/styles/main.scss";

export interface ICheckboxProps {
  size: "s" | "m";
  theme: "light" | "dark";
  label?: string;
}

const Checkbox = ({ size, theme, label }: ICheckboxProps) => {
  return (
    <label
      className={clsx(
        styles["checkbox"],
        styles[`checkbox--${size}`],
        styles[`checkbox--${theme}`]
      )}
    >
      <input type="checkbox" />
      <span>{label}</span>
    </label>
  );
};

export { Checkbox };
