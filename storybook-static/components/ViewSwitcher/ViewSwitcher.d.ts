import { default as React } from '../../../node_modules/react';
export interface IViewSwitcherProps {
    onClickLeft: () => void;
    onClickRight: () => void;
    setIsOpen: (isOpen: boolean) => void;
    isOpen: boolean;
    children: React.ReactNode;
    className?: string;
}
declare const ViewSwitcher: React.FC<IViewSwitcherProps>;
export default ViewSwitcher;
