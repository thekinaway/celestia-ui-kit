import React, { useState, FC } from 'react';
import styles from './DatePicker.module.scss';

import { MONTHS } from '../../constants';
import { DateChanger } from './datechanger/DateChanger';

export interface IDatePickerProps {
    month: number;
    setMonth: (month: number) => void;
    // setYear: (year: number) => void;
    // year: number;
}

const DatePicker: FC<IDatePickerProps> = ({ ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [year, setYear] = useState(new Date().getFullYear());

    const [month, setMonth] = useState(new Date().getMonth());

    const setPrevMonth = () => {
        if (month === 0) {
            setMonth(11);
            setYear(prev => prev - 1);
        } else {
            setMonth(prev => prev - 1);
        }
    };

    const setNextMonth = () => {
        if (month === 11) {
            setMonth(0);
            setYear(prev => prev + 1);
        } else {
            setMonth(prev => prev + 1);
        }
    };

    return (
        <div className={styles['date-picker']} {...props}>
            <div className={styles["month-picker-container"]}>
                <DateChanger
                    className='month-picker'
                    onClickLeft={setPrevMonth}
                    onClickRight={setNextMonth}
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                    children={`${MONTHS[month]} ${year}`}
                />
            </div>

            {isOpen &&
                <div className={styles["year-picker-container"]}>
                    <DateChanger className='year-picker'
                        onClickLeft={() => setYear(year - 1)}
                        onClickRight={() => setYear(year + 1)}
                        setIsOpen={setIsOpen}
                        isOpen={isOpen}
                        children={year}
                    />
                    <div className={styles["year-picker-months"]}>
                        {MONTHS.map((month, index) => (
                            <button
                                key={index}
                                onClick={() => setMonth(index)}
                                className={styles["month-item"]}
                            >
                                {month}
                            </button>
                        ))}
                    </div>

                </div>
            }
        </div>
    )

}

export default DatePicker;