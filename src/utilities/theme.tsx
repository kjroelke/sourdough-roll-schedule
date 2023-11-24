import '@fontsource-variable/playfair-display';
import { ThemeOptions, createTheme } from '@mui/material/styles';

export const theme = createTheme({
	palette: {
		// mode: 'dark',
		primary: {
			main: 'rgb(61,28,17)',
		},
		secondary: {
			main: 'rgb(140,101,72)',
		},
	},
	typography: {
		fontFamily: '"Playfair Display Variable", serif',
		fontWeightLight: 300,
		htmlFontSize: 10,
		fontSize: 16,
	},
} as ThemeOptions);
