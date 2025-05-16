import React, { FC, useState } from "react";
import clsx from "clsx";
import styles from "./Switch.module.scss";
import "@/styles/main.scss";

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

export const Switch: FC<ISwitchProps> = ({
  theme,
  checked,
  defaultChecked,
  disabled,
  label,
  labelPosition = "left",
  size = "s",
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked || defaultChecked);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(!isChecked);
    onChange(e);
  };

  return (
    <label
      className={clsx(
        styles["switch__label"],
        styles[`switch__label--${labelPosition}`],
        styles[`switch__label--${theme}`],
        disabled ? styles["switch__label--disabled"] : ""
      )}
    >
      {label}
      <input
        type="checkbox"
        className={styles["switch__input"]}
        defaultChecked={defaultChecked}
        checked={checked}
        disabled={disabled}
        onChange={handleCheckboxChange}
        aria-checked={checked}
        aria-disabled={disabled}
        aria-label={label}
      />
      <div
        className={clsx(
          styles.switch,
          styles[`switch--${theme}`],
          styles[`switch--${size}`],
          isChecked ? styles["switch--checked"] : ""
        )}
      >
        <div className={clsx(styles["switch__circle"])}></div>
      </div>
    </label>
  );
};
