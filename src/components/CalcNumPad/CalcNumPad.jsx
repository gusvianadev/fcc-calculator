import CalcNumPadFunctions from './CalcNumPad.functions';
import { ButtonSty, CalcNumpadSty } from './CalcNumPad.styles';

const NumPad = ({
	screen,
	setScreen,
	operation,
	setOperation,
	setOperationSymbol,
}) => {
	const { numPadBtns, handleBtnClick } = CalcNumPadFunctions({
		screen,
		setScreen,
		operation,
		setOperation,
		setOperationSymbol,
	});

	return (
		<CalcNumpadSty>
			{numPadBtns.map((btn) => (
				<ButtonSty key={btn} type="button" onClick={handleBtnClick}>
					{btn}
				</ButtonSty>
			))}
		</CalcNumpadSty>
	);
};

export default NumPad;
