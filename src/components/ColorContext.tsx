import '@fontsource-variable/playfair-display';
import React, { useState, useMemo, createContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

export const ColorModeContext = createContext({
	toggleColorMode: () => {},
});

export default function ToggleColorMode({ children }) {
	const [mode, setMode] = useState<'light' | 'dark'>('light');
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
			},
		}),
		[],
	);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					primary: {
						main: '#3c1c12',
					},
					secondary: {
						main: '#c18062',
					},
					text: {
						primary: '#3c1c12',
					},
					background: {
						paper: '#d1bcb5',
					},
				},
				typography: {
					fontSize: 16,
					htmlFontSize: 10,
					fontFamily: '"Playfair Display Variable", Garamond, serif',
				},
			}),
		[mode],
	);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}
