/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			keyframes: {
				height: {
				  '0%': { height: '0%' },
				  '90%': { opacity: "0.9"},
				  '100%': { height: '100%', opacity:"0" },
				},
			},
			animation: {
				height: 'height 3s linear infinite',
			},
		},
		screens: {
			'xs': '530px',
			'sm': '758px',
			'md': '960px',
			'lg': '1440px',
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
