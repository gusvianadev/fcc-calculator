import styled from 'styled-components';

const ThemeTogglerSty = styled.div`
	display: flex;
	font-size: 0.7rem;

	& .theme-toggler__title {
		margin-right: 1rem;
		text-transform: uppercase;
		display: flex;

		& > * {
			margin: auto;
		}
	}

	& .theme-toggler__theme-list {
		display: flex;
		flex-wrap: wrap;
		width: 70px;

		& .theme-toggler__theme-list__number {
			flex: 1 1 33%;
			text-align: center;
		}

		& .theme-toggler__selector-container {
			flex: 1 1 100%;
			max-width: 100%;
			height: 25px;
			margin-bottom: 0;
			padding: 5px;
			display: flex;
			justify-content: ${({ theme }) => theme.togglerPosition};
			cursor: pointer;

			& .theme-toggler__selector {
				width: 16px;
				height: 100%;
				background-color: ${({ theme }) => theme.equalSignBackground};
				border-radius: 50%;
			}
		}
	}
`;

export default ThemeTogglerSty;
