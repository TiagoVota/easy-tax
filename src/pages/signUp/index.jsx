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

import { signUpSchema } from '../../schemas/userSchema'

import Form from '../../components/form'
import PasswordInput from '../../components/passwordInput'

import styles from '../../components/formComponents'


const defaultFormData = {
	name: '',
	email: '',
	password: '',
	repeatPassword: '',
}

const SignUp = () => {
	const { token } = useAuth()
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
		
		const { isValid, error } = handleValidation(body, signUpSchema)
		if (!isValid) return errorModal(error)

		api.postSignUp(body)
			.then(() => {
				successModal('Cadastro realizado!')
				goLoginPage()
			}).catch(({ request: { status }}) => handleFailSignUp(status))
	}

	const handleFailSignUp = (status) => {
		const msgStatus = {
			409: 'E-mail já cadastrado!',
			422: 'Campo(s) inválido(s)!',
			500: 'Erro nosso, tente novamente mais tarde, por favor 🥺'
		}

		const msgToSend = msgStatus[status] || 'Problema com o servidor 🥺'

		errorModal(msgToSend)
	}

	const goLoginPage = () => {
		setFormData(defaultFormData)
		navigate('/login')
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
          Cadastro
				</Typography>

				{/* TODO: Adicionar entrar com gmail
				<Button variant="contained" color="secondary">
          Entrar com Github
				</Button>
				<Box sx={styles.dividerContainer}>
					<Divider sx={{ flex: '1' }} />
					<Typography variant="caption" component="span">
            ou
					</Typography>
					<Divider sx={{ flex: '1' }} />
				</Box> */}

				<TextField
					name="name"
					sx={styles.input}
					label="Nome"
					type="text"
					variant="outlined"
					onChange={handleInputChange}
					value={formData.name}
					autoFocus={true}
				/>

				<TextField
					name="email"
					sx={styles.input}
					label="E-mail"
					type="email"
					variant="outlined"
					onChange={handleInputChange}
					value={formData.email}
				/>

				<PasswordInput
					name="password"
					sx={styles.input}
					label="Senha"
					onChange={handleInputChange}
					value={formData.password}
				/>

				<PasswordInput
					name="repeatPassword"
					sx={styles.input}
					label="Confirme sua senha"
					onChange={handleInputChange}
					value={formData.repeatPassword}
				/>

				<Box sx={styles.actionsContainer}>
					<Link component={RouterLink} to="/login">
						<Typography>
							Já possuo cadastro
						</Typography>
					</Link>

					<Button variant="contained" type="submit">
            Cadastrar
					</Button>
				</Box>
			</Box>
		</Form>
	)
}


export default SignUp
