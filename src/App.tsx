import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Ingredients from './sections/Ingredients';
import Meta from './sections/Meta';
import Notes from './sections/Notes';
import Instructions from './sections/Instructions';
import InputField from './components/InputField';
import { doughIngredients, starterIngredients } from './content/ingredients';
import { Box, Container, CssBaseline, Typography } from '@mui/material';

import { ThemeProvider } from '@emotion/react';
import { theme } from './utilities/theme';
import BasicDateTimePicker from './components/DateTimePicker';
import dayjs from 'dayjs';
import Header from './ui/Header';

const root = document.getElementById('app');
createRoot(root).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</React.StrictMode>,
);

function App() {
	const [dateTime, setDateTime] = useState(dayjs().add(12, 'h'));
	const [readyTime, setReadyTime] = useState(12);
	const [servings, setServings] = useState(12);
	return (
		<Container maxWidth="lg" sx={{ padding: '3rem' }}>
			<main>
				<Header
					headline="Soft Sourdough Dinner Rolls Recipe"
					subheadline="Soft sourdough dinner rolls are everything you ever dreamed of! These amazing, pull-apart dinner rolls are fluffy, buttery, and so easy to make."
					author="Amy Duska"
					originalRecipeLink="https://littlespoonfarm.com/soft-sourdough-dinner-rolls-recipe/"
				/>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						padding: '1rem',
						marginY: '2rem',
					}}>
					<BasicDateTimePicker
						label="Finish Date & Time"
						value={dateTime}
						setValue={setDateTime}
					/>
					<Box sx={{ display: 'flex', flexDirection: 'row' }}>
						<InputField
							label="Ready Time"
							id="ready-time"
							prompt="How long does your starter take to be ready?"
							value={readyTime}
							onChange={(e) => setReadyTime(Number(e.target.value))}
						/>
						<InputField
							label="Servings"
							id="servings"
							prompt="Number of Servings"
							value={servings}
							onChange={(e) => setServings(Number(e.target.value))}
						/>
					</Box>
				</Box>
				<Meta servings={servings} />
				<Instructions readyTime={readyTime} endTime={dateTime} />
				<Notes />
			</main>
			<aside>
				<Box className="equipment">
					<Typography variant="h4" component="h2">
						Equipment
					</Typography>
					<Typography variant="body1" paragraph={true}>
						9" x 13" glass baking dish
					</Typography>
				</Box>
				<Box className="ingredients" component="section">
					<Ingredients servings={servings} />
				</Box>
			</aside>
		</Container>
	);
}
