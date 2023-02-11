import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function MaterialUIPickers() {
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <div className='w-full flex mt-9'>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              
                    <DateTimePicker
                        label="Date&Time picker"
                        value={value}
                        onChange={handleChange}
                    inputProps={{ style: { padding: '25px' } }} 
                        
                    renderInput={(params) => <TextField {...params} />}
                    />
                    
            </LocalizationProvider>
        </div>
    );
}
