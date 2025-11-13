/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				brand: {
					50: '#f5f8ff',
					100: '#e9efff',
					200: '#cfe0ff',
					300: '#a8c2ff',
					400: '#7ea0ff',
					500: '#5b80ff',
					600: '#3a5cff',
					700: '#2d47cc',
					800: '#203499',
					900: '#162266',
					950: '#0d153d',
				},
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '1rem',
					lg: '2rem',
					xl: '2rem',
					'2xl': '2.5rem',
				},
			},
		},
	},
	plugins: [],
}


