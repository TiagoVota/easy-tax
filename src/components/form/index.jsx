import { Box } from '@mui/system'

import styles from './styles'


const Form = ({ children, onSubmit }) => {
	return (
		<Box sx={styles} component="form" onSubmit={onSubmit}>
			{children}
		</Box>
	)
}


export default Form
