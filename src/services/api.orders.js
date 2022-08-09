import { makeBaseAPI } from './helpers/baseUrlHelper'
import { makeConfig } from './helpers/configHelper'


const baseAPI = makeBaseAPI('orders')

const getOrderInfo = ({ token }) => {
	return baseAPI.get('/buy-info', makeConfig(token))
}


export {
	getOrderInfo,
}
