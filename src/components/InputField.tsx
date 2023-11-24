import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields({
	id,
	prompt,
	label,
	placeholder,
	onChange,
	value,
}: {
	id: string;
	prompt: string;
	placeholder?: string;
	label: string;
	value: string | number;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<Box
			component="form"
			sx={{
				'& > :not(style)': { m: 1, width: '25ch' },
			}}
			noValidate
			autoComplete="off">
			<TextField
				value={value}
				onChange={onChange}
				id={id}
				label={label}
				variant="outlined"
				placeholder={placeholder}
				helperText={prompt}
			/>
		</Box>
	);
}
