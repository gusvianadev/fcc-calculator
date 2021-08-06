import styled from 'styled-components';

const AppSty = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.mainBackground};
	display: flex;
	padding: 1rem 0;

	.calculator {
		width: 90%;
		max-width: 576px;
		margin: auto;
	}
`;

export default AppSty;
