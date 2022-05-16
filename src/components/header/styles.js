import styled from 'styled-components'

import { headerHeight } from '../../utils/sharedSizes'
import { headerZIndex } from '../../utils/z-indexes'


const Container = styled.header`
	width: 100%;
	height: ${headerHeight};
	padding: 10px 0;

	position: fixed;
	top: 0;
	left: 0;
	z-index: ${headerZIndex};

	display: flex;
	justify-content: space-between;
	align-items: center;

	font-weight: bold;
	font-size: 26px;
	line-height: 31px;
	color: #FFFFFF;

	background-color: #151515;

	@media(max-width: 650px) {
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
`


export {
	Container,
}

