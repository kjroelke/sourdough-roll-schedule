import React from 'react';
import { Box, List, Paper, Typography } from '@mui/material';
import NoteCard from '../components/NoteCard';

export default function Notes({ notes }: { notes: string[] }) {
	return (
		<Box className="notes" component="section">
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
					<Paper elevation={3} key={index} sx={{ padding: '2rem' }}>
						{note}
					</Paper>
				))}
			</List>
		</Box>
	);
}
