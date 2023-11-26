// 3rd Party Imports
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
	Box,
	Container,
	Grid,
	Paper,
	Typography,
	useTheme,
} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import dayjs from 'dayjs';

// Components
import Ingredients from './sections/Ingredients';
import Meta from './sections/Meta';
import Notes from './sections/Notes';
import Instructions from './sections/Instructions';
import InputField from './components/InputField';
import BasicDateTimePicker from './components/DateTimePicker';
import Header from './ui/Header';
import ToggleColorMode from './components/ColorContext';

const root = document.getElementById('app');

createRoot(root).render(
	<ToggleColorMode>
		<App />
	</ToggleColorMode>,
);

function App() {
	const [dateTime, setDateTime] = useState(dayjs().add(12, 'h'));
	const [readyTime, setReadyTime] = useState(12);
	const [servings, setServings] = useState(12);

	function handleChange(ev, callback) {
		const input = Number(ev.target.value);
		if (Number.isNaN(input)) {
			callback((prev) => prev);
		} else {
			callback(input);
		}
	}

	return (
		<Container maxWidth="lg" sx={{ marginY: 5 }}>
			<Header
				headline="Soft Sourdough Dinner Rolls Recipe"
				subheadline="Soft sourdough dinner rolls are everything you ever dreamed of! These amazing, pull-apart dinner rolls are fluffy, buttery, and so easy to make."
				author="Amy Duska"
				originalRecipeLink="https://littlespoonfarm.com/soft-sourdough-dinner-rolls-recipe/"
			/>
			<Grid
				container
				spacing={3}
				sx={{ position: 'relative', marginY: '2rem', padding: '2rem' }}
				display="flex"
				alignItems="flex-start"
				component="section">
				<Grid item md={8}>
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'space-between',
						}}>
						<Box
							sx={{
								flex: '1 1 50%',
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
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
									marginY: 2,
								}}>
								<InputField
									label="Ready Time"
									id="ready-time"
									prompt="How long does your starter take to be ready?"
									value={readyTime}
									onChange={(ev) => handleChange(ev, setReadyTime)}
								/>
								<InputField
									label="Servings"
									id="servings"
									prompt="Number of Servings"
									value={servings}
									onChange={(ev) => handleChange(ev, setServings)}
								/>
							</Box>
						</Box>
						<Meta
							sx={{
								flex: '1 1 50%',
							}}
							servings={servings}
						/>
					</Box>
					<Instructions readyTime={readyTime} endTime={dateTime} />
				</Grid>
				<Grid
					item
					md={4}
					sx={{ position: 'sticky', top: '5%' }}
					component="aside">
					<Paper variant="elevation" elevation={6} sx={{ padding: '2rem' }}>
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
					</Paper>
				</Grid>
			</Grid>
			<Notes
				sx={{ marginY: 10 }}
				notes={[
					`It's very important to take the ambient temperature of your kitchen
						into account when working with sourdough. Our recipes are tested in
						a kitchen that is 68°F (20°C). If your kitchen is warmer, you will
						need to reduce your rising time in the first and second rise to
						avoid over-proving the dough.`,
					`If you'd like to prepare the dough and bake the rolls at a later
					time, after shaping the rolls in step 4, cover the dish with plastic
					wrap and store in the fridge for up to 36 hours. When ready to bake,
					allow them to have the second rise at room temperature until puffy
					and proceed with baking.`,
					`If using a tin baking sheet bake rolls at 400°F. Rolls can also be
					baked in a muffin tin for 23-25 minutes.`,
				]}
			/>
			<footer
				style={{ textAlign: 'center', paddingTop: 10, paddingBottom: 10 }}>
				Created by K.J. Roelke for fun. See more on{' '}
				<a href="https://github.com/kjroelke/sourdough-roll-schedule#readme">
					Github.
				</a>
			</footer>
		</Container>
	);
}
