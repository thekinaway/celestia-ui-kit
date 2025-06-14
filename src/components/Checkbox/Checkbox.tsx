import "@/styles/main.scss";

import clsx from "clsx";
import React, { useEffect, useState } from "react";

import styles from "./Checkbox.module.scss";

export interface ICheckboxProps {
  size: "s" | "m";
  theme: "light" | "dark";
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

const CheckboxComponent = ({
  size,
  theme,
  label,
  checked,
  onChange,
}: ICheckboxProps) => {
  const [isChecked, setIsChecked] = useState(checked || false);

  useEffect(() => {
    setIsChecked(checked ?? false);
  }, [checked]);

  const onChangeHandler = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(isChecked);
    }
  };

  return (
    <label
      className={clsx(
        styles["checkbox"],
        styles[`checkbox--${size}`],
        styles[`checkbox--${theme}`]
      )}
    >
      <input
        type="checkbox"
        checked={isChecked}
        onChange={onChangeHandler}
        className={styles["checkbox__input"]}
      />
      <div className={styles["checkbox__container"]}></div>
      <span>{label}</span>
    </label>
  );
};

export const Checkbox = React.memo(CheckboxComponent);
