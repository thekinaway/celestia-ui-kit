import { default as React } from '../../../../node_modules/react';
export interface IDateChangerProps {
    onClickLeft: () => void;
    onClickRight: () => void;
    setIsOpen: (isOpen: boolean) => void;
    isOpen: boolean;
    children: React.ReactNode;
    className?: string;
}
export declare const DateChanger: React.FC<IDateChangerProps>;
