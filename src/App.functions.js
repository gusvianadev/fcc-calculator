import { useState } from 'react';
import CalcHeader from './components/CalcHeader/CalcHeader';
import CalcNumPad from './components/CalcNumPad/CalcNumPad';
import CalcScreen from './components/CalcScreen/CalcScreen';
import { theme1, theme2, theme3 } from './styles/themes';

const AppFunctions = () => {
	// >> THEMES << //
	const [theme, setTheme] = useState(theme1);

	const toggleTheme = () => {
		switch (theme) {
			case theme1:
				setTheme(theme2);
				break;
			case theme2:
				setTheme(theme3);
				break;
			default:
				setTheme(theme1);
				break;
		}
	};

	// >> CALCS << //
	const [screen, setScreen] = useState('0');
	const [operation, setOperation] = useState(null);
	const [operationSymbol, setOperationSymbol] = useState('');

	const calcItems = [
		{
			name: 'header',
			background: 'transparent',
			content: <CalcHeader theme={theme} toggleTheme={toggleTheme} />,
		},
		{
			name: 'screen',
			background: theme.screenBackground,
			content: (
				<CalcScreen operationSymbol={operationSymbol} screen={screen} />
			),
		},
		{
			name: 'pad',
			background: theme.padAndTogglerBackground,
			content: (
				<CalcNumPad
					screen={screen}
					setScreen={setScreen}
					operation={operation}
					setOperation={setOperation}
					setOperationSymbol={setOperationSymbol}
				/>
			),
		},
	];

	return { calcItems, theme };
};

export default AppFunctions;
