import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom'

import MainApp from './components/mainPage'
import {
	Login,
	SignUp,
	AddOrder,
} from './pages/index'


const PagesRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/sign-up' element={<SignUp />} />
				<Route path='' element={<MainApp />}>
					<Route path='/orders/add' element={<AddOrder />} />
				</Route>
			</Routes>
		</Router>
	)
}


export default PagesRoutes
