module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    stroke: {
	    'icon-grey': '#454346',
    },
    extend: {
		spacing: {
			'102': '29rem',
		},
	},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
