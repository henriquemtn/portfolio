/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
			  refine: {
				"0%": {
				  left: "0%",
				},
				"20%": {
				  left: "-50%",
				},
				"40%": {
				  left: "0%",
				},
				"60%": {
				  left: "50%",
				},
				"80%": {
				  left: "0%",
				},
				"100%": {
				  left: "0%",
				},
			  },
			},
		  },
	},
	plugins: [],
}
