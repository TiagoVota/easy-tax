import { createTheme } from '@mui/material'


const theme = createTheme({
	palette: {
		primary: {
			main: '#D64000',
		},
		secondary: {
			main: '#FFFFFF'
		},
		background: {
			default: '#303038',
			paper: '#FFFFFF'
		},
		text: {
			primary: '#FFFFFF',
			secondary: '#05C4AA',
		},
	},
	typography: {
		fontFamily: [
			'Ubuntu',
			'Roboto',
			'sans-serif',
			'Arial',
		].join(','),
	},
})


export default theme
