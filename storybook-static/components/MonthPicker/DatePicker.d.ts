import { FC } from '../../../node_modules/react';
export interface IDatePickerProps {
    month: number;
    setMonth: (month: number) => void;
}
declare const DatePicker: FC<IDatePickerProps>;
export default DatePicker;
