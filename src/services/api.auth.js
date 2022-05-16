import { makeBaseAPI } from './helpers/baseUrlHelper'


const baseAPI = makeBaseAPI('auth')

const postLogin = ({ email, password }) => {
	const body = { email, password }
	
	return baseAPI.post('/login', body)
}


const postSignUp = ({ name, email, password }) => {
	const body = { name, email, password }

	return baseAPI.post('/sign-up', body)
}


export {
	postLogin,
	postSignUp,
}
