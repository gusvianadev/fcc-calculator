import styled from 'styled-components';

const CalcSectionBackgroundSty = styled.div`
	background-color: ${({ bgColor }) => bgColor};
	border-radius: ${({ borderRadius }) => borderRadius || '10px'};
	margin-bottom: 1rem;
`;

export default CalcSectionBackgroundSty;
