import { ThemeProvider } from 'styled-components';
import AppFunctions from './App.functions';
import AppSty from './styles/App.styles';
import CalcSectionBackgroundSty from './styles/CalcSectionBackground.styles';
import GlobalStyles from './styles/GlobalStyles.styles';

const App = () => {
	const { calcItems, theme } = AppFunctions();

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<AppSty>
				<div className="calculator">
					{calcItems.map(({ name, background, content }) => (
						<CalcSectionBackgroundSty
							key={name}
							bgColor={background}
						>
							{content}
						</CalcSectionBackgroundSty>
					))}
				</div>
			</AppSty>
		</ThemeProvider>
	);
};

export default App;
