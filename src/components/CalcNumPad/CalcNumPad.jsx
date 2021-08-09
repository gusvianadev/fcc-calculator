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
			{numPadBtns.map(({ btn, id }) => (
				<ButtonSty
					id={id}
					key={id}
					type="button"
					onClick={handleBtnClick}
				>
					{btn}
				</ButtonSty>
			))}
		</CalcNumpadSty>
	);
};

export default NumPad;
