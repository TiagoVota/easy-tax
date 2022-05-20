import { headerHeight } from '../../utils/sharedSizes'


const styles = {
	container: {
		height: `calc(100vh - ${headerHeight})`,
		marginTop: headerHeight,
		display: 'flex',
		flexDirection: 'column',
	},
}


export default styles
