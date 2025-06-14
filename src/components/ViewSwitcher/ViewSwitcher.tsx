import "@/styles/main.scss";

import React from "react";

import { ArrowLeft, ArrowRight } from "../icons";
import styles from "./ViewSwitcher.module.scss";

export interface IViewSwitcherProps {
  onClickLeft: () => void;
  onClickRight: () => void;
  setIsOpen: (isOpen: boolean) => void;
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
}

const ViewSwitcher: React.FC<IViewSwitcherProps> = ({
  onClickLeft,
  onClickRight,
  setIsOpen,
  isOpen,
  children,
  className,
}) => {
  return (
    <div className={`${styles["view-switcher"]} ${className}`}>
      <button onClick={onClickLeft} className={styles["button--arrow"]}>
        <ArrowLeft />
      </button>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles["button--date"]}
      >
        {children}
      </button>
      <button onClick={onClickRight} className={styles["button--arrow"]}>
        <ArrowRight />
      </button>
    </div>
  );
};

export default ViewSwitcher;
