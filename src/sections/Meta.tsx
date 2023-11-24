import { Box, Link, Typography } from '@mui/material';
import React from 'react';

const meta = [
	{
		label: 'Prep Time',
		value: '15 minutes',
	},
	{
		label: 'Cook Time',
		value: '30 minutes',
	},
	{
		label: 'Resting Time',
		value: '8 Hours',
	},
];

export default function Meta({ servings }) {
	return (
		<Box
			component={'aside'}
			sx={{
				display: 'grid',
				placeContent: 'center',
				marginY: '5rem',
				gap: '2rem',
				gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
			}}>
			{meta.map(({ label, value }, index) => (
				<Box sx={{ display: 'flex', flexDirection: 'column' }} key={index}>
					<Typography variant="h6" component="h2">
						{label}
					</Typography>
					<Typography variant="body1" component="span">
						{value}
					</Typography>
				</Box>
			))}
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<Typography variant="h6" component="h2">
					Servings
				</Typography>
				<Typography variant="body1" component="span">
					{servings}
				</Typography>
			</Box>
		</Box>
	);
}
