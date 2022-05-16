import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
	
  html {
		font-family: 'Ubuntu', sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		color: rgba(0, 0, 0, 0.8);

    background-color: #FAFAFA;
  }

	button {
		padding: 0px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		font-family: 'Ubuntu', sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 14px;
		line-height: 24px;
		letter-spacing: 0.4px;

		text-transform: uppercase;

		border-width: 0px;
		border-radius: 4px;
		box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 1px 5px rgba(0, 0, 0, 0.12);

		color: #1976D2;
		background-color: #FFFFFF;
		opacity: ${p => p.isDisable ? 0.7 : 1};

		cursor: ${p => p.isDisable ? 'wait' : 'pointer'};

		:hover {
			filter: brightness(90%);
		}
	}

	input {
		display: flex;
		align-items: center;
		
		font-family: 'Ubuntu', sans-serif;
		font-style: normal;
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;
		letter-spacing: 0.15px;

		border-radius: 4px;
		border: 1px solid #C4C4C4;

		background-color: ${p => p.isDisable ? '#F2F2F2' : '#FFFFFF'};

		pointer-events: ${p => p.isDisable ? 'wait' : 'all'};

		::placeholder {
			color: #575757;
		}

		:focus {
			color: #05C4AA;
			outline: none;
		}
	}

	select {
		font-family: 'Ubuntu', sans-serif;
		font-style: normal;
		font-weight: normal;

		border-radius: 4px;
		border: 1px solid #C4C4C4;

		color: rgba(0, 0, 0, 0.8);

		background-color: ${p => p.isDisable ? '#F2F2F2' : '#FFFFFF'};

		pointer-events: ${p => p.isDisable ? 'not-allowed' : 'all'};

		:focus {
			outline: none;
		}
	}

	a {
		text-decoration: none;

		* {
			:hover {
				color: '#1877F2';
			}
		}
	}

	strong {
		font-weight: 700;
	}
`


export default GlobalStyle
