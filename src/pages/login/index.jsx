import { useEffect, useState } from 'react'
import { Link as RouterLink, useNavigate } from 'react-router-dom'
import {
	Box,
	Button,
	Divider,
	Link,
	TextField,
	Typography,
} from '@mui/material'

import useAuth from '../../hooks/useAuth'

import * as api from '../../services/api.auth'
import { errorModal, successModal } from '../../factories/modalFactory'
import { handleValidation } from '../../validations/handleValidation'

import { loginSchema } from '../../schemas/userSchema'

import Form from '../../components/form'
import PasswordInput from '../../components/passwordInput'

import styles from '../../components/formComponents'


const defaultFormData = {
	email: '',
	password: '',
}

const Login = () => {
	const { token, login } = useAuth()
	const navigate = useNavigate()
	const [formData, setFormData] = useState(defaultFormData)

	useEffect(() => {
		if (token) goHomepage()
	}, [])

	const handleInputChange = (event) => {
		const { name, value } = event.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()

		const body = {
			...formData,
			email: formData.email?.toLowerCase(),
		}
		
		const { isValid, error } = handleValidation(body, loginSchema)
		if (!isValid) return errorModal(error)

		api.postLogin(body)
			.then(({ data: loginInfo }) => {
				successModal('Login realizado!')
				login(loginInfo.token)
				goHomepage()
			}).catch(({ request: { status }}) => handleFailLogin(status))
	}

	const handleFailLogin = (status) => {
		const msgStatus = {
			401: 'Senha incorreta!',
			404: 'E-mail não encontrado!',
			422: 'Campo(s) inválido(s)!',
			500: 'Erro nosso, tente novamente mais tarde, por favor 🥺'
		}

		const msgToSend = msgStatus[status] || 'Problema com o servidor 🥺'

		errorModal(msgToSend)
	}

	const goHomepage = () => {
		setFormData(defaultFormData)
		navigate('/')
	}

	return (
		<Form onSubmit={handleSubmit}>
			<Box sx={styles.container}>
				<Typography
					sx={styles.title}
					color='secondary'
					variant='h4'
					component='h1'
				>
          Login
				</Typography>

				{/* TODO: Adicionar entrar com gmail
				<Button variant='contained' color='secondary'>
          Entrar com Github
				</Button>
				<Box sx={styles.dividerContainer}>
					<Divider sx={{ flex: '1' }} />
					<Typography variant='caption' component='span'>
            ou
					</Typography>
					<Divider sx={{ flex: '1' }} />
				</Box> */}

				<TextField
					name='email'
					sx={styles.input}
					label='E-mail'
					type='email'
					variant='outlined'
					onChange={handleInputChange}
					value={formData.email}
					autoFocus={true}
				/>

				<PasswordInput
					name='password'
					sx={styles.input}
					label='Senha'
					onChange={handleInputChange}
					value={formData.password}
				/>

				<Box sx={styles.actionsContainer}>
					<Link component={RouterLink} to='/sign-up'>
						<Typography>
							Não possuo cadastro
						</Typography>
					</Link>

					<Button variant='contained' type='submit'>
            Entrar
					</Button>
				</Box>
			</Box>
		</Form>
	)
}


export default Login
