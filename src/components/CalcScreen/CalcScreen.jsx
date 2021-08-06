import CalcScreenSty from './CalcScreen.styles';

const CalcScreen = ({ operationSymbol, screen }) => (
	<CalcScreenSty>
		<div className="screen__operation">{operationSymbol}</div>
		<div className="screen__number">{screen}</div>
	</CalcScreenSty>
);
export default CalcScreen;
