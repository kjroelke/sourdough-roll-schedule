import React, { useContext } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { ColorModeContext } from '../components/ColorContext';
import ColorToggle from '../components/ColorToggle';

export default function Header({
	headline,
	subheadline,
	author,
	originalRecipeLink,
}: {
	headline: string;
	subheadline?: string;
	author?: string;
	originalRecipeLink?: string;
}) {
	return (
		<>
			{/* <ColorToggle /> */}
			<Typography variant="h2" component="h1">
				{headline}
			</Typography>
			{subheadline && (
				<Typography variant="body1" sx={{ marginY: '2rem' }}>
					{subheadline}
				</Typography>
			)}
			{(author || originalRecipeLink) && (
				<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
					{author && (
						<Typography variant="body2" sx={{ display: 'block' }}>
							Author: {author}
						</Typography>
					)}
					{originalRecipeLink && (
						<Link
							sx={{ display: 'block' }}
							target="_blank"
							rel="noreferrer noopener"
							variant="body1"
							href={originalRecipeLink}>
							Original Recipe Link
						</Link>
					)}
				</Box>
			)}
		</>
	);
}
