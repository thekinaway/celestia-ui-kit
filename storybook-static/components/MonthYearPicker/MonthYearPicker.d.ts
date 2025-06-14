import { FC } from '../../../node_modules/react';
export interface IMonthYearPickerProps {
    month: number;
    setMonth: (month: number) => void;
    year: number;
    setYear: (year: number) => void;
}
declare const MonthYearPicker: FC<IMonthYearPickerProps>;
export default MonthYearPicker;
