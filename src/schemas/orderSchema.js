import Joi from 'joi'


const orderSchema = Joi.object({
	tickerId: Joi.number().integer().min(0).required(),
	typeId: Joi.number().integer().min(0).required(),
	price: Joi.number().integer().min(1).required(),
	quantity: Joi.number().integer().min(1).required(),
	brokerId: Joi.number().integer().min(0).required(),
	date: Joi.date().required(),
}).length(6)


export {
	orderSchema,
}
