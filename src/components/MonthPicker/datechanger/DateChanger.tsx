import React from "react";
import "./DateChanger.scss";

export interface IDateChangerProps {
    onClickLeft: () => void;
    onClickRight: () => void;
    setIsOpen: (isOpen: boolean) => void;
    isOpen: boolean;
    children: React.ReactNode;
    className?: string;
}

export const DateChanger: React.FC<IDateChangerProps> = ({ onClickLeft, onClickRight, setIsOpen, isOpen, children, className }) => {
    return (
        <div className={`date-changer ${className}`}>
            <button onClick={onClickLeft} className="button--arrow">
                <img src="/arrow-left.svg" alt="Arrow Left Icon" />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="button--date">
                {children}
            </button>
            <button onClick={onClickRight} className="button--arrow">
                <img src="/arrow-right.svg" alt="Arrow Right Icon" />
            </button>
        </div>
    )
}