import styled from 'styled-components';

const CalcHeaderSty = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	color: ${({ theme }) => theme.headerText};

	& .calc-header__title {
		margin: 0;
		display: flex;

		& > * {
			margin: auto;
		}
	}
`;

export default CalcHeaderSty;
