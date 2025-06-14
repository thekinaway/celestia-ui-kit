import "@/styles/main.scss";

import React, { FC, useRef, useState } from "react";

import { MONTHS } from "../../constants";
import useClickOutside from "../../lib/hooks/useClickOutside";
import { ViewSwitcher } from "../ViewSwitcher";
import styles from "./MonthYearPicker.module.scss";

export interface IMonthYearPickerProps {
  month: number;
  setMonth: (month: number) => void;
  year: number;
  setYear: (year: number) => void;
}

const MonthYearPicker: FC<IMonthYearPickerProps> = ({
  month,
  setMonth,
  year,
  setYear,
  ...rest
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setIsOpen(false));

  const [isOpen, setIsOpen] = useState(false);

  const setPrevMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const setNextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  return (
    <div className={styles["date-picker"]} ref={ref} {...rest}>
      <div className={styles["month-picker-container"]}>
        <ViewSwitcher
          className={styles["month-picker"]}
          onClickLeft={setPrevMonth}
          onClickRight={setNextMonth}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        >
          {`${MONTHS[month - 1]} ${year}`}
        </ViewSwitcher>
      </div>
      {isOpen && (
        <div
          className={styles["year-picker-container"]}
          onMouseDown={(event) => event.preventDefault()}
        >
          <ViewSwitcher
            className={styles["year-picker"]}
            onClickLeft={() => setYear(year - 1)}
            onClickRight={() => setYear(year + 1)}
            setIsOpen={setIsOpen}
            isOpen={isOpen}
          >
            {year}
          </ViewSwitcher>
          <div className={styles["year-picker-months"]}>
            {MONTHS.map((monthName, index) => (
              <button
                key={index}
                onClick={() => {
                  setMonth(index + 1);
                }}
                className={styles["month-item"]}
              >
                {monthName}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MonthYearPicker;
