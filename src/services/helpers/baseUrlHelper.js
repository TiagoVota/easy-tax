import axios from 'axios'

const { REACT_APP_API_BASE_URL } = process.env


const BASE_URL = REACT_APP_API_BASE_URL || 'http://localhost:4242'

const makeBaseAPI = (apiRoute) => {
	const baseAPI = axios.create({
		baseURL: `${BASE_URL}/${apiRoute}`,
	})

	return baseAPI
}


export {
	makeBaseAPI,
}
