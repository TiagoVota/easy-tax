import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import {
	IconButton,
	InputAdornment,
} from '@mui/material'


const VisibleIcon = ({ isVisible, handleClick }) => {
	return (
		<InputAdornment position="end">
			<IconButton
				aria-label="toggle password visibility"
				onClick={handleClick}
				onMouseDown={handleClick}
				edge="end"
			>
				{isVisible ? <VisibilityOff /> : <Visibility />}
			</IconButton>
		</InputAdornment>
	)
}


export default VisibleIcon

