import { Link } from 'react-router-dom'
import { Button, Toolbar } from '@mui/material'

import headersData from './utils/headersData'

import styles from './styles'


const ToolbarHeader = () => {
	return (
		<Toolbar>
			{
				headersData.map(({ label, href }) => 
					<Button
						sx={styles.toolbarButtons}
						key={label}
						to={href}
						component={Link}
					>
						{label}
					</Button>
				)}
		</Toolbar>
	)
}


export default ToolbarHeader

