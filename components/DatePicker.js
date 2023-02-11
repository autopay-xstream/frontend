import React, { useState } from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function MaterialUIPickers({ selected, setSelected }) {
    const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setSelected(newValue);
    };

    return (
        <div className='w-full flex mt-9'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>

                <DateTimePicker
                    label="Select End Date"
                    value={selected}
                    onChange={handleChange}
                    inputProps={{ style: { padding: '25px' } }}

                    renderInput={(params) => <TextField {...params} />}
                />

            </LocalizationProvider>
        </div>
    );
}
