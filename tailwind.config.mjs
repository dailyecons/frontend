import daisyui from 'daisyui';
import themes from 'daisyui/src/theming/themes';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			lora: ['Lora Variable', 'serif'],
			questrial: ['Questrial', 'san-serif']
		},

		extend: {},
	},

	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				light: {
					...themes.light,

					primary: '#2F2E2E',
					neutral: '#2F2E2E',

					'base-content': '#FFFFFF',
					'neutral-content': 'rgb(179, 179, 179)'
				}
			}
		],
	}
}
