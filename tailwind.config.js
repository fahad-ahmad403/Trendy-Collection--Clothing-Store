/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	future: {
		hoverOnlyWhenSupported: true,
	  },
  theme: {
  	colors: {
  		purple: 'rgb(29, 40, 86)',
  		orange: 'rgb(231, 106, 52)',
  		white: 'rgb(255, 255, 255)',
  		lightgrey: 'rgb(209, 213, 219)',
  		black: 'rgb(0, 0, 0)',
  		grey: 'rgb(100, 100, 100)',
  		blue: 'rgb(37, 99, 235)',
  		red: 'rgb(255, 0, 0)',
  		yellow: 'rgb(250, 204, 21)',
  		green: 'rgb(22, 163, 100)',
  	},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	},
	  screens: {
		'xs': '360px',
		// => @media (min-width: 640px) { ... }

		'sm': '640px',
		// => @media (min-width: 640px) { ... }
  
		'md': '880px',
		// => @media (min-width: 768px) { ... }
  
		'lg': '1024px',
		// => @media (min-width: 1024px) { ... }
  
		'xl': '1280px',
		// => @media (min-width: 1280px) { ... }
  
		'2xl': '1536px',
		// => @media (min-width: 1536px) { ... }
	  }
  },
  plugins: [require("tailwindcss-animate")],
};
