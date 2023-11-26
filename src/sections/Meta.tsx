import React from 'react';
import { Box, Paper, Typography } from '@mui/material';

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

export default function Meta({ servings, sx }) {
	return (
		<Box
			component={'aside'}
			sx={{
				...sx,
			}}>
			<Paper
				elevation={2}
				variant="elevation"
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(2,1fr)',
					padding: '2rem',
					gap: '1rem',
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
			</Paper>
		</Box>
	);
}
