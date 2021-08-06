import CalcScreenSty from './CalcScreen.styles';

const CalcScreen = ({ operation, screen }) => {
	const operationSymbol = () => {
		if (operation) {
			switch (operation.name) {
				// ? adds the correct symbol
				case 'add':
					return '+';
				case 'substract':
					return '-';
				case 'multiply':
					return 'x';
				case 'divide':
					return '/';
				default:
					return 'calc';
			}
		} else {
			return 'calc';
		}
	};
	return (
		<CalcScreenSty>
			<div className="screen__operation">{operationSymbol()}</div>
			<div className="screen__number">{screen}</div>
		</CalcScreenSty>
	);
};
export default CalcScreen;
