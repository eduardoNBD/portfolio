/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "media",
	theme: {
		extend: {
			keyframes: {
				height: {
				  '0%': { height: '0%' },
				  '100%': { height: '100%' },
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
	plugins: [],
}
