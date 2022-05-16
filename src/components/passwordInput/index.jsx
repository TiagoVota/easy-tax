import { useState } from 'react'
import {
	FormControl,
	InputLabel,
	OutlinedInput,
} from '@mui/material'

import VisibleIcon from './visibleIcon'


const PasswordInput = ({ name, sx, label, value, onChange }) => {
	const [showPassword, setShowPassword] = useState(false)

	const handleIconClick = () => setShowPassword(!showPassword)

	return (
		<FormControl sx={sx} variant="outlined">
			<InputLabel htmlFor={name}>{label}</InputLabel>
			<OutlinedInput
				id={name}
				name={name}
				type={showPassword ? 'text' : 'password'}
				value={value}
				onChange={onChange}
				endAdornment={<VisibleIcon
					isVisible={showPassword}
					handleClick={handleIconClick}
				/>}
				label={label}
			/>
		</FormControl>
	)
}


export default PasswordInput
