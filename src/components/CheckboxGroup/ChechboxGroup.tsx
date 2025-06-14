import clsx from "clsx";
import React, { useCallback, useState } from "react";

import { Checkbox } from "../Checkbox/Checkbox";
import styles from "./CheckboxGroup.module.scss";

export interface Option {
  label: string;
  checked: boolean;
}

export interface CheckboxGroupProps {
  orientation: "vertical" | "horizontal";
  size: "s" | "m";
  theme: "light" | "dark";
  groupLabel?: string;
  options: Option[];
  onChange?: (options: Option[]) => void;
}

const CheckboxGroup = ({
  theme,
  size,
  orientation,
  groupLabel,
  options,
  onChange,
}: CheckboxGroupProps) => {
  const [checkboxes, setCheckboxes] = useState<Option[]>(options);

  const toggleCheckbox = useCallback(
    (i: number) => {
      setCheckboxes((prev) => {
        const updated = prev.map((option, index) =>
          index === i ? { ...option, checked: !option.checked } : option
        );

        onChange?.(updated);
        return updated;
      });
    },
    [onChange]
  );

  const toggleAll = useCallback(() => {
    const allChecked = checkboxes.every((option) => option.checked);

    const updated = checkboxes.map((option) => ({
      ...option,
      checked: !allChecked,
    }));

    setCheckboxes(updated);
    onChange?.(updated);
  }, [checkboxes, onChange]);

  return (
    <div
      className={clsx(
        styles[`checkbox-group--${orientation}`],
        styles[`checkbox-group--${size}`],
        styles[`checkbox-group--${theme}`],
        styles["checkbox-group"]
      )}
    >
      <span>{groupLabel}</span>
      <Checkbox
        label="Вcе"
        size={size}
        theme={theme}
        checked={checkboxes.length > 0 && checkboxes.every((cb) => cb.checked)}
        onChange={toggleAll}
      />
      <div className={styles["checkbox-group__items"]}>
        {checkboxes.map((option, i) => (
          <Checkbox
            key={i}
            size={size}
            theme={theme}
            label={option.label}
            checked={option.checked}
            onChange={() => toggleCheckbox(i)}
          />
        ))}
      </div>
    </div>
  );
};

export { CheckboxGroup };
