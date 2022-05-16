import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

import ResetStyleCSS from './styles/ResetStyleCSS'
import GlobalStyle from './styles/GlobalStyle'

import PagesRoutes from './Routes'

import theme from './styles/theme'


const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<AuthProvider>
				<ResetStyleCSS />
				<GlobalStyle />
				<CssBaseline />
		
				<PagesRoutes />
			</AuthProvider>
		</ThemeProvider>
	)
}


export default App
