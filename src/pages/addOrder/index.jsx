import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'

import useAuth from '../../hooks/useAuth'

import * as api from '../../services/api.orders'

import { errorModal } from '../../factories/modalFactory'

import OrderInput from './orderInput'

import styles from './styles'


const AddOrder = () => {
	const { token } = useAuth()
	const [buyInfo, setBuyInfo] = useState({})
	const [orderExpanded, setOrderExpanded] = useState(false)

	useEffect(() => {
		api.getOrderInfo({ token })
			.then(({ data }) => setBuyInfo(data))
			.catch()
	}, [])

	const handleFailSubmit = (status) => {
		const msgStatus = {
			401: 'Acesso negado, por favor tente <a href=\'/\'>entrar</a> novamente!',
			404: 'Categoria, professor ou disciplina não encontrado!',
			422: 'Campo(s) inválido(s)!',
			500: 'Erro nosso, tente novamente mais tarde, por favor 🥺'
		}

		const msgToSend = msgStatus[status] || 'Problema com o servidor 🥺'

		errorModal(msgToSend)
	}

	const goHomepage = () => {
		clearForm()
		Navigate('/disciplines')
	}

	const clearForm = () => {
		// setName('')
		// setPdfUrl('')
		// setCategory('')
		// setDiscipline('')
		// setTeacher('')
	}

	

	// const handleChange = (panel) => {
	// 	setOrderExpanded(newExpanded ? panel : false)
	// }
	const handleChange = (panel) => {
		return (event, newExpanded) => {
			setOrderExpanded(newExpanded ? panel : false)
		}
	}

	return (
		<Box sx={styles.container}>
			<Typography
				sx={styles.title}
				variant='h5'
				component='h1'
			>
				ADICIONAR ORDEM
			</Typography>

			<Box
				sx={styles.formContainer}
				component='form'
				onSubmit={() => {}}
			>
				<OrderInput
					buyInfo={buyInfo}
					handleChange={handleChange}
					orderExpanded={orderExpanded}
				/>

				<Button sx={styles.submitButton} variant='contained'>
					Adicionar Ordem
				</Button>
			</Box>
		</Box>
	)
}


export default AddOrder

