import React from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import styles from "./CheckboxGroup.module.scss";
import clsx from "clsx";

export interface CheckboxGroupProps {
  orientation: "vertical" | "horizontal";
  size: "s" | "m";
  theme: "light" | "dark";
  label?: string;
  //   checked: "checked" | empty | someChecked;
}

const CheckboxGroup = ({
  size,
  theme,
  orientation,
  label,
}: CheckboxGroupProps) => {
  return (
    <div
      className={clsx(
        styles[`checkbox-group--${orientation}`],
        styles["checkbox-group"]
      )}
    >
      <Checkbox label={label} size={size} theme={theme} />
    </div>
  );
};

export { CheckboxGroup };
