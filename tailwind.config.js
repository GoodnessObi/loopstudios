/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				lp: {
					gray: 'hsl(0, 0%, 55%)',
					deepGray: 'hsl(0, 0%, 41%)',
				},
			},
			fontFamily: {
				mono: ['var(--font-alata)'],
				sans: ['var(--font-josefin-sans)'],
			},
		},
	},
	plugins: [],
};
