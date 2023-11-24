import React from 'react';
import { Box, List, ListItem, Typography } from '@mui/material';

export default function Notes() {
	return (
		<Box className="notes" component="section">
			<Typography variant="h2">Notes</Typography>
			<List className="notes-list" component={'ul'}>
				<ListItem className="notes-list__item">
					<Typography variant="body1" paragraph={true}>
						It's very important to take the ambient temperature of your kitchen
						into account when working with sourdough. Our recipes are tested in
						a kitchen that is 68°F (20°C). If your kitchen is warmer, you will
						need to reduce your rising time in the first and second rise to
						avoid over-proving the dough.
					</Typography>
					<Typography variant="body1" paragraph={true}>
						If you'd like to prepare the dough and bake the rolls at a later
						time, after shaping the rolls in step 4, cover the dish with plastic
						wrap and store in the fridge for up to 36 hours. When ready to bake,
						allow them to have the second rise at room temperature until puffy
						and proceed with baking.
					</Typography>
					<Typography variant="body1" paragraph={true}>
						If using a tin baking sheet bake rolls at 400°F. Rolls can also be
						baked in a muffin tin for 23-25 minutes.
					</Typography>
				</ListItem>
			</List>
		</Box>
	);
}
