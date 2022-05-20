import { headerHeight } from '../../../utils/sharedSizes'


const styles = {
	header: {
		height: headerHeight,
		padding: '0 15px',

		display: 'flex',
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',

		backgroundColor: '#28282D',
	},

	iconButton: {
		height: headerHeight,
		padding: '0 15px',

		borderRadius: '0px',
		boxShadow: 'none',

		color: 'primary.main'
	},
}


export default styles
