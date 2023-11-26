import React, { useEffect, useState } from 'react';

import { Typography } from '@mui/material';
type Ingredient = {
	quantity: number;
	unit: string;
	name: string;
};

export default function Ingredients({ servings }: { servings: number }) {
	const [ingredients, setIngredients] = useState({
		doughIngredients: [
			{
				name: 'butter',
				quantity: (28 / 12) * servings,
				unit: 'g',
			},
			{
				name: 'milk',
				quantity: (240 / 12) * servings,
				unit: 'g',
			},
			{
				name: 'sugar',
				quantity: (44 / 12) * servings,
				unit: 'g',
			},
			{
				name: 'salt',
				quantity: (5 / 12) * servings,
				unit: 'g',
			},
			{
				name: 'active sourdough starter',
				quantity: (100 / 12) * servings,
				unit: 'g',
			},
			{
				name: 'bread flour',
				quantity: (375 / 12) * servings,
				unit: 'g',
			},
			{
				name: 'melted butter (for brushing the top of the rolls after baking)',
				quantity: (1 / 12) * servings,
				unit: 'tablespoon',
			},
		],
		starterIngredients: [
			{
				name: 'sourdough starter',
				quantity: 15,
				unit: 'g',
			},
			{
				name: 'all-purpose flour',
				quantity: 50,
				unit: 'g',
			},
			{
				name: 'water',
				quantity: 50,
				unit: 'g',
			},
		],
	});
	useEffect(() => {
		setIngredients({
			doughIngredients: [
				{
					name: 'butter',
					quantity: (28 / 12) * servings,
					unit: 'g',
				},
				{
					name: 'milk',
					quantity: (240 / 12) * servings,
					unit: 'g',
				},
				{
					name: 'sugar',
					quantity: (44 / 12) * servings,
					unit: 'g',
				},
				{
					name: 'salt',
					quantity: (5 / 12) * servings,
					unit: 'g',
				},
				{
					name: 'active sourdough starter',
					quantity: (100 / 12) * servings,
					unit: 'g',
				},
				{
					name: 'bread flour',
					quantity: (375 / 12) * servings,
					unit: 'g',
				},
				{
					name: 'melted butter (for brushing the top of the rolls after baking)',
					quantity: (1 / 12) * servings,
					unit: 'tablespoon',
				},
			],
			starterIngredients: [
				{
					name: 'sourdough starter',
					quantity: 15,
					unit: 'g',
				},
				{
					name: 'all-purpose flour',
					quantity: 50,
					unit: 'g',
				},
				{
					name: 'water',
					quantity: 50,
					unit: 'g',
				},
			],
		});
	}, [servings]);
	return (
		<>
			<Typography variant="h4" component="h2">
				Ingredients to make 100 G of active starter
			</Typography>
			<ul className="starter-ingredients">
				{ingredients.starterIngredients.map(
					({ quantity, unit, name }, index) => (
						<Typography
							variant="body1"
							component="li"
							className={`starter-ingredients__item`}
							key={index}>
							{`${quantity} ${unit} ${name}`}
						</Typography>
					),
				)}
			</ul>
			<Typography variant="h4" component="h2">
				Dough Ingredients
			</Typography>
			<ul className="dough-ingredients">
				{ingredients.doughIngredients.map(({ quantity, unit, name }, index) => (
					<Typography
						variant="body1"
						component="li"
						className={`dough-ingredients__item`}
						key={index}>
						{`${quantity} ${unit} ${name}`}
					</Typography>
				))}
			</ul>
		</>
	);
}
