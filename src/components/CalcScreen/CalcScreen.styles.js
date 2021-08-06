import styled from 'styled-components';

const CalcScreenSty = styled.div`
	padding: 1rem;
	font-size: 1.8em;
	color: ${({ theme }) => theme.headerText};
	display: flex;
	justify-content: space-between;
	user-select: text;

	& .screen__number {
		text-align: right;
	}
`;

export default CalcScreenSty;
