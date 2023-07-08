import type { Meta, StoryObj } from '@storybook/svelte';
import Box from './Box.svelte';

const meta: Meta = {
	title: 'Components/Box',
	component: Box,
	tags: ['autodocs'],
	argTypes: {
		imageUrl: { control: 'text' },
		title: { control: 'text' },
		type: {
			control: { type: 'select' },
			options: ['square', 'rectangular']
		}
	}
} satisfies Meta<Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SquareBox: any = {
	args: {
		imageUrl:
			'https://math-media.byjusfutureschool.com/bfs-math/2022/07/04185628/Asset-1-8-300x300.png',
		title: 'Square Box',
		type: 'square'
	}
};

export const RectangularBox: any = {
	args: {
		imageUrl:
			'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png',
		title: 'Rectangular Box',
		type: 'rectangular'
	}
};

