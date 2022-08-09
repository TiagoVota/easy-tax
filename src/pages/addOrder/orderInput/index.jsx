import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Autocomplete,
	FormControl,
	InputAdornment,
	InputLabel,
	OutlinedInput,
	Stack,
	TextField,
	Typography
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import DesktopDatePicker from '@mui/lab/DesktopDatePicker'
// import { DatePicker } from '@mui/x-date-pickers/DatePicker'

import styles from './styles'
import { useEffect, useState } from 'react'


const mockTickers = [{id: 1, name: 'TICK1'}, {id: 2, name: 'TICK2'}, {id: 3, name: 'TICK3'}]
const mockTypes = [{id: 1, name: 'buy'}, {id: 2, name: 'sell'},]
const mockBrokers = [{id: 1, name: 'rico'}, {id: 2, name: 'nuInvest'},]
const OrderInput = ({ buyInfo, handleChange, orderExpanded }) => {
	const { tickers, types, brokers } = buyInfo
	const [ticker, setTicker] = useState(null)
	const [type, setType] = useState(null)
	const [broker, setBroker] = useState(null)
	const [meanPrice, setMeanPrice] = useState(null)
	const [quantity, setQuantity] = useState(null)
	const [date, setDate] = useState(null)


	return (
		<Accordion
			sx={styles.container}
			expanded={orderExpanded === 'panel1'}
			onChange={handleChange('panel1')}
		>
			<AccordionSummary
				sx={styles.title}
				expandIcon={<ExpandMoreIcon />}
			>
				<Typography>Ordem</Typography>
			</AccordionSummary>

			<AccordionDetails sx={styles.inputsBox} >
				<Stack spacing={2} sx={styles.inputBox}>
					<Autocomplete
						options={mockTickers}
						getOptionLabel={(option) => option.name}
						id='blur-on-select'
						blurOnSelect
						value={ticker}
						onChange={(e, newValue) => setTicker(newValue)}
						renderInput={(params) => (
							<TextField
								{...params}
								sx={styles.autocompleteOptions}
								label='Ticker'
								variant='standard'
							/>
						)}
						renderOption={(props, option) => {
							const { name } = option
							return (
								<span {...props} style={{ backgroundColor: '#303038' }}>
									{name}
								</span>
							)
						}}
					/>

					<Autocomplete
						options={mockTypes}
						getOptionLabel={(option) => option.name}
						id='type'
						blurOnSelect
						value={type}
						onChange={(e, newValue) => setType(newValue)}
						renderInput={(params) => (
							<TextField
								{...params}
								sx={styles.autocompleteOptions}
								label='Tipo de transação'
								variant='standard'
							/>
						)}
						renderOption={(props, option) => {
							const { name } = option
							return (
								<span {...props} style={{ backgroundColor: '#303038' }}>
									{name}
								</span>
							)
						}}
					/>

					<Autocomplete
						options={mockBrokers}
						getOptionLabel={(option) => option.name}
						id='broker'
						blurOnSelect
						value={broker}
						onChange={(e, newValue) => setBroker(newValue)}
						renderInput={(params) => (
							<TextField
								{...params}
								sx={styles.autocompleteOptions}
								label='Corretora'
								variant='standard'
							/>
						)}
						renderOption={(props, option) => {
							const { name } = option
							return (
								<span {...props} style={{ backgroundColor: '#303038' }}>
									{name}
								</span>
							)
						}}
					/>
				</Stack>

				<Stack spacing={2} sx={styles.inputBox}>
					<FormControl>
						<InputLabel htmlFor="mean-price">
							Preço médio
						</InputLabel>
						<OutlinedInput
							id="mean-price"
							value={meanPrice}
							onChange={(e, newValue) => setMeanPrice(newValue)}
							startAdornment={<InputAdornment position="start">R$</InputAdornment>}
							label='Preço médio'
						/>
					</FormControl>

					<FormControl>
						<InputLabel htmlFor="quantity">
							Quantidade
						</InputLabel>
						<OutlinedInput
							id="quantity"
							value={quantity}
							onChange={(e, newValue) => setQuantity(newValue)}
							label='Quantidade'
						/>
					</FormControl>

					{/* <DesktopDatePicker
						label="Date"
						inputFormat="MM/DD/YYYY" //depends on date lib
						value={date}
						onChange={setDate}
					/> */}
				</Stack>
			</AccordionDetails>
		</ Accordion>
	)
}


export default OrderInput

