import { useState, createContext } from 'react'


const AuthContext = createContext()

const LOCAL_STORAGE_KEY = 'easy-tax-token'
const persistedToken = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(persistedToken)

	const login = (token) => {
		setToken(token)
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(token))
	}

	const logout = () => {
		setToken(null)
		localStorage.removeItem(LOCAL_STORAGE_KEY)
	}


	return (
		<AuthContext.Provider value={{ token, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}


export default AuthContext
export {
	AuthProvider,
}
