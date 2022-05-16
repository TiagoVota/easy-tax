import { Container } from './styles'


const Header = ({ children, onClick }) => {
	const handleClick = onClick || function () {return}
	
	return (
		<Container onClick={handleClick}>
			{children}
		</Container>
	)
}


export default Header
