import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'

import useAuth from '../../hooks/useAuth'

import styles from './styles'
import Header from './header'


const MainApp = ({ redirectPath='/login' }) => {
	const { token } = useAuth()
	if (!token) {
		return <Navigate to={redirectPath} replace />
	}


	return (
		<>
			<Header />
			
			<Box sx={styles.container} >
				<Outlet />
			</Box>
		</>
	)
}


export default MainApp
