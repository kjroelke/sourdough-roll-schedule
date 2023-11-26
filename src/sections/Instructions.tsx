import React, { useEffect } from 'react';
import dayjs from 'dayjs';

import { Box, Typography } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
	timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

type Instructions = {
	time: string;
	instruction: string;
	description: string;
};

export default function Instructions({ endTime, readyTime }) {
	const [instructions, setInstructions] = React.useState<Instructions[]>([
		{
			time: endTime.subtract(readyTime, 'hours'),
			instruction: 'Feed starter',
			description:
				'12 hours before you plan to mix the dough, add the ingredients to make ½ cup (100 g) of active sourdough starter to a clean jar. Stir until combined, loosely cover the jar and let the starter rise at room temperature. (The ingredients will create a total of 115 g active starter but, because some of it will stick to the sides of the jar during the transfer, we are making a little more than needed.) The sourdough starter is ready to use when it has doubled in size and there are plenty of bubbles on the surface and sides of the jar.',
		},
		{
			time: endTime.subtract(7.5, 'hours'), // - 30 minutes
			instruction: 'Melt Butter',
			description:
				'In a small saucepan, melt the butter, milk, sugar and salt together over low heat. Pour the mixture into a mixing bowl and allow it to cool down to room temperature.',
		},
		{
			time: endTime.subtract(7, 'hours'), // - 1 hour
			instruction: 'Mix dough',
			description:
				'Add the flour and active sourdough starter to the bowl and stir with a spatula until the ingredients are combined and there are no dry bits left in the bowl. Cover the bowl and allow to rest at room temperature for 1 hour.',
		},
		{
			time: endTime.subtract(6, 'hours'), // -3 hours
			instruction: 'First rise',
			description:
				'Perform 3 sets of stretch and folds spaced 30 minutes apart, keeping the bowl covered between sets. To perform a set, pick up the dough on one side and stretch it up and over itself. Turn the bowl a quarter turn and repeat this step until you have turned the bowl a full circle. After the final set, cover and allow the dough to rise for 2 hours or until it has risen by 50% in size. (See notes.)',
		},
		{
			time: endTime.subtract(3, 'hours'), // -3 hours
			instruction: 'Shape and Second rise',
			description:
				'Turn the dough out onto a floured surface and divide it into 12 pieces, approximately 65 grams each. Shape each piece into a ball by gathering up the sides and pinching them together. Turn the dough over so that the seam side is down on the work surface and gently form a smooth ball. Arrange them in a lightly greased glass baking dish. Cover the dish with a tea towel and let rise for 3-4 hours.',
		},
		{
			time: endTime,
			instruction: 'Bake',
			description:
				'About 20 minutes before you are ready to bake preheat your oven to 375°F (190°C). Bake for 25-30 minutes or until they are golden brown on top. The internal temperature of the rolls should be 190°F when fully baked. Brush the top of the roll with melted butter and serve.',
		},
	]);

	useEffect(() => {
		setInstructions([
			{
				time: endTime.subtract(readyTime, 'hours'),
				instruction: 'Feed starter',
				description: `${readyTime} hours before you plan to mix the dough, add the ingredients to make ½ cup (100 g) of active sourdough starter to a clean jar. Stir until combined, loosely cover the jar and let the starter rise at room temperature. (The ingredients will create a total of 115 g active starter but, because some of it will stick to the sides of the jar during the transfer, we are making a little more than needed.) The sourdough starter is ready to use when it has doubled in size and there are plenty of bubbles on the surface and sides of the jar.`,
			},
			{
				time: endTime.subtract(7.5, 'hours'), // - 30 minutes
				instruction: 'Melt Butter',
				description:
					'In a small saucepan, melt the butter, milk, sugar and salt together over low heat. Pour the mixture into a mixing bowl and allow it to cool down to room temperature.',
			},
			{
				time: endTime.subtract(7, 'hours'), // - 1 hour
				instruction: 'Mix dough',
				description:
					'Add the flour and active sourdough starter to the bowl and stir with a spatula until the ingredients are combined and there are no dry bits left in the bowl. Cover the bowl and allow to rest at room temperature for 1 hour.',
			},
			{
				time: endTime.subtract(6, 'hours'), // -3 hours
				instruction: 'First rise',
				description:
					'Perform 3 sets of stretch and folds spaced 30 minutes apart, keeping the bowl covered between sets. To perform a set, pick up the dough on one side and stretch it up and over itself. Turn the bowl a quarter turn and repeat this step until you have turned the bowl a full circle. After the final set, cover and allow the dough to rise for 2 hours or until it has risen by 50% in size. (See notes.)',
			},
			{
				time: endTime.subtract(3, 'hours'), // -3 hours
				instruction: 'Shape and Second rise',
				description:
					'Turn the dough out onto a floured surface and divide it into 12 pieces, approximately 65 grams each. Shape each piece into a ball by gathering up the sides and pinching them together. Turn the dough over so that the seam side is down on the work surface and gently form a smooth ball. Arrange them in a lightly greased glass baking dish. Cover the dish with a tea towel and let rise for 3-4 hours.',
			},
			{
				time: endTime,
				instruction: 'Bake',
				description:
					'About 20 minutes before you are ready to bake preheat your oven to 375°F (190°C). Bake for 25-30 minutes or until they are golden brown on top. The internal temperature of the rolls should be 190°F when fully baked. Brush the top of the roll with melted butter and serve.',
			},
		]);
	}, [endTime, readyTime]);

	return (
		<Box className="instructions" component="section">
			<Typography variant="h4" component="h2">
				Instructions
			</Typography>
			<Timeline
				sx={{
					[`& .${timelineOppositeContentClasses.root}`]: {
						flex: 0.2,
					},
				}}>
				{instructions.map(({ time, instruction, description }, index) => (
					<TimelineItem key={index}>
						<TimelineOppositeContent color="text.primary">
							{`${dayjs(time).format('h:mm a')} ${instruction}`}
						</TimelineOppositeContent>
						<TimelineSeparator>
							<TimelineDot color="secondary" />
							<TimelineConnector color="primary" />
						</TimelineSeparator>
						<TimelineContent>{description}</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</Box>
	);
}
