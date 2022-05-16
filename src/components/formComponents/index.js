import styled from 'styled-components'

import { Link } from 'react-router-dom'


const FormContainer = styled.div`
	width: 40%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	gap: 15px;

	@media(max-width: 650px) {
		width: 100%;
		margin-top: 50px;
	}
`

const Form = styled.form`
	width: 80%;

	display: flex;
	flex-direction: column;

	gap: 13px;
`

const Input = styled.input`
	width: 100%;
	height: 58px;

	padding-left: 13px;

	font-size: 20px;

	border-radius: 5px;
	border-width: 0px;
`

const Button = styled.button`
	width: 100%;
	height: 46px;

	border-radius: 5px;
	background: #1877F2;
	
	font-family: 'Oswald', sans-serif;
	font-weight: bold;
	font-size: 22px;
	line-height: 33px;
`

const RedirectLink = styled(Link)`
	font-family: 'Lato', sans-serif;
	font-size: 17px;
	line-height: 20px;
	text-decoration-line: underline;

	color: #FFFFFF;
`


export {
	Button,
	Form,
	FormContainer,
	Input,
	RedirectLink,
} 
