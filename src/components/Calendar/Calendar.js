import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    return (
        <div className='ml-80'>
            <DayPicker />;
        </div>
    );
};

export default Calendar;