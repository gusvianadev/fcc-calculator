import CalcScreenSty from './CalcScreen.styles';

const CalcScreen = ({ operation, screen }) => {
	const operationSymbol = () => {
		if (operation) {
			switch (operation.name) {
				case 'add':
					return '+';
				case 'substract':
					return '-';
				case 'multiply':
					return 'x';
				case 'divide':
					return '/';
				default:
					return '';
			}
		} else {
			return '';
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
