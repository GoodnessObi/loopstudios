import { product } from '@/types/product';
import { navItem } from '@/types/nav';

const navList: navItem[] = [
	{
		path: '#',
		name: 'About',
	},
	{
		path: '#',
		name: 'Careers',
	},
	{
		path: '#',
		name: 'Events',
	},
	{
		path: '#',
		name: 'Products',
	},
	{
		path: '#',
		name: 'Support',
	},
];

const products: product[] = [
	{
		url: '/images/desktop/image-deep-earth.jpg',
		name: 'deep earth',
		alt: '',
	},
	{
		url: '/images/desktop/image-night-arcade.jpg',
		name: 'night arcade',
		alt: '',
	},
	{
		url: '/images/desktop/image-soccer-team.jpg',
		name: 'soccer team vr',
		alt: '',
	},
	{
		url: '/images/desktop/image-grid.jpg',
		name: 'the grid',
		alt: '',
	},
	{
		url: '/images/desktop/image-from-above.jpg',
		name: 'from up above vr',
		alt: '',
	},
	{
		url: '/images/desktop/image-pocket-borealis.jpg',
		name: 'pocket borealis',
		alt: '',
	},
	{
		url: '/images/desktop/image-curiosity.jpg',
		name: 'the curiosity',
		alt: '',
	},
	{
		url: '/images/desktop/image-fisheye.jpg',
		name: 'make it fisheye',
		alt: '',
	},
];

export { navList, products };
