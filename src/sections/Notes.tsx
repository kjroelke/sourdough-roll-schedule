import React from 'react';
import { Box, List, Paper, Typography } from '@mui/material';

export default function Notes({
	notes,
	sx = {},
}: {
	notes: string[];
	sx?: object;
}) {
	return (
		<Box className="notes" component="section" sx={sx}>
			<Typography variant="h4" component="h2">
				Notes
			</Typography>
			<List
				className="notes-list"
				component={'ul'}
				sx={{
					display: 'grid',
					gap: '2rem',
					gridTemplateColumns: 'repeat(auto-fill,minmax(175px,250px))',
				}}>
				{notes.map((note, index) => (
					<Paper
						variant="elevation"
						elevation={3}
						key={index}
						sx={{ padding: '2rem' }}>
						{note}
					</Paper>
				))}
			</List>
		</Box>
	);
}
