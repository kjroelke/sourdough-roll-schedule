import * as React from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

export default function BasicDateTimePicker({
	label,
	value,
	setValue,
}: {
	label: string;
	value: dayjs.Dayjs;
	setValue: (newValue: dayjs.Dayjs) => void;
}) {
	const handleChange = (newValue) => {
		setValue(newValue);
	};
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DateTimePicker
				label={label}
				value={value}
				onChange={handleChange}
				views={['year', 'month', 'day', 'hours', 'minutes']}
			/>
		</LocalizationProvider>
	);
}
