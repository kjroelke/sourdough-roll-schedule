import React, { useContext } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../components/ColorToggle';

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
	const theme = useTheme();
	const colorMode = useContext(ColorModeContext);

	return (
		<>
			<Box
				sx={{
					display: 'flex',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					bgcolor: 'background.default',
					color: 'text.primary',
					borderRadius: 1,
					p: 3,
				}}>
				{theme.palette.mode} mode
				<IconButton
					sx={{ ml: 1 }}
					onClick={colorMode.toggleColorMode}
					color="inherit">
					{theme.palette.mode === 'dark' ? (
						<Brightness7Icon />
					) : (
						<Brightness4Icon />
					)}
				</IconButton>
			</Box>
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
