import styled from 'styled-components';

export const CalcNumpadSty = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding: 1rem;
`;

export const ButtonSty = styled.button`
	flex: 1 1 20%;
	height: 60px;
	margin: 0.3rem;
	border: none;
	border-radius: 5px;
	background-color: ${({ children, theme }) => {
		switch (children) {
			case 'del':
			case 'reset':
				return theme.resetDelBackground;
			case '=':
				return theme.equalSignBackground;
			default:
				return theme.keyBackground;
		}
	}};
	-webkit-box-shadow: inset 0px -4px 0px 0px ${({ children, theme }) => {
			switch (children) {
				case 'del':
				case 'reset':
					return theme.resetDelShadow;
				case '=':
					return theme.equalSignShadow;
				default:
					return theme.keyShadow;
			}
		}};
	box-shadow: inset 0px -4px 0px 0px ${({ children, theme }) => {
			switch (children) {
				case 'del':
				case 'reset':
					return theme.resetDelShadow;
				case '=':
					return theme.equalSignShadow;
				default:
					return theme.keyShadow;
			}
		}};
	font-size: ${({ children }) => {
		switch (children) {
			case 'del':
			case 'reset':
				return '1em';
			case '=':
				return '1em';
			default:
				return '1.8em';
		}
	}};
	font-weight: bold;
	font-family: inherit;
	text-transform: uppercase;
	color: ${({ children, theme }) => {
		switch (children) {
			case 'del':
			case 'reset':
				return theme.resetDelText;
			case '=':
				return theme.equalSignText;
			default:
				return theme.keyText;
		}
	}};
	cursor: pointer;

	:active {
		transform: translate(1px, 1px);
	}
`;
