import { Container } from './styles'


const PageContainer = ({ children: content }) => {
	return (
		<Container>
			{content}
		</Container>
	)
}


export default PageContainer
