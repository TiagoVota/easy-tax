import { useNavigate } from 'react-router-dom'
import { AppBar, IconButton } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'

import useAuth from '../../../hooks/useAuth'

import Logo from '../../logo'
import ToolbarHeader from './toolbarHeader'

import styles from './styles'


const Header = () => {
	const navigate = useNavigate()
	const { logout } = useAuth()

	const handleLogout = () => {
		navigate('/login')
		logout()
	}

	const handleLogoClick = () => navigate('/')
  

	return (
		<AppBar sx={styles.header}>
			<IconButton sx={styles.iconButton} onClick={handleLogoClick} >
				<Logo />
			</IconButton>

			<ToolbarHeader />

			<IconButton sx={styles.iconButton} onClick={handleLogout} >
				<LogoutIcon />
			</IconButton>
		</AppBar>
	)
}


export default Header
