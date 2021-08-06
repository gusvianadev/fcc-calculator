import { useState } from 'react';

const CalcNumPadFunctions = ({
	screen,
	setScreen,
	operation,
	setOperation,
	setOperationSymbol,
}) => {
	const numPadBtns = [
		'7',
		'8',
		'9',
		'del',
		'4',
		'5',
		'6',
		'+',
		'1',
		'2',
		'3',
		'-',
		'.',
		'0',
		'/',
		'x',
		'reset',
		'=',
	];

	const add = (a, b) => a + b;
	const substract = (a, b) => a - b;
	const multiply = (a, b) => a * b;
	const divide = (a, b) => a / b;

	// ? to reset the screen when doing a calc
	const [total, setTotal] = useState(null);
	const [clearScreen, setClearScreen] = useState(true);

	const handleBtnClick = ({ target }) => {
		const btn = target.innerHTML;
		const tooManyDots =
			btn === '.' &&
			screen
				.toString()
				.split('')
				.filter((dot) => dot === '.').length > 0;
		const leadingDot = screen && btn === '.';
		const maxNumber = 9999999999;
		const tooManyDecimals =
			!clearScreen &&
			screen.toString().includes('.') &&
			screen.toString().split('.')[1].length > 1;
		const repeatZero = screen.toString() === '0' && btn === '0';
		// p.s.: regex is for cowards or ssr+ devs

		const handleNumb = () => {
			// ? filter
			if (tooManyDots || tooManyDecimals || repeatZero) {
				return null;
			}
			// ? first check if the amount of numbers is less than 10 or if the screen is to be cleared
			if (parseFloat(screen + btn) < maxNumber || clearScreen) {
				if (clearScreen) {
					// ? if the screen was to be cleared
					leadingDot ? setScreen('0.') : setScreen(btn);
					setClearScreen(false);
				} else {
					setScreen(screen.toString() + btn);
				}
			}
		};

		const handleOperation = (callback, symbol) => {
			const executeOperation = () => {
				const calc = parseFloat(
					// ? to remove unnecessary floating points
					operation(parseFloat(total), parseFloat(screen)).toFixed(2)
				);
				if (calc < maxNumber) {
					setTotal(calc);
					setScreen(calc);
				} else {
					setTotal(maxNumber);
					setScreen(maxNumber);
				}
			};

			if (screen !== '-') {
				if (!clearScreen) {
					// ? if it's the first operation
					// ? the callback check is to avoid just permapressing an operator
					if (!operation && callback) {
						setTotal(screen);
						setOperation(() => callback);
						setOperationSymbol(symbol);
					} else if (callback) {
						// ? if an operation is requested
						executeOperation();
						setOperation(() => callback);
						setOperationSymbol(symbol);
					} else if (operation) {
						// ? for the equal sign. Just execute and don't set any other operation
						executeOperation();
						setOperation('');
						setOperationSymbol('=');
					}
					setClearScreen(true);
				} else if (btn === '-') {
					setScreen('-');
					setClearScreen(false);
				} else {
					setTotal('0');
					setOperation(() => callback);
					setOperationSymbol(symbol);
				}
			}
		};

		const handleDel = () => {
			// ? if the screen has at least 2 numbers
			if (screen.toString().length > 1) {
				setScreen(screen.toString().slice(0, -1));
			} else {
				setScreen('0');
				setClearScreen(true);
			}
		};

		const handleReset = () => {
			setScreen('0');
			setOperation(null);
			setOperationSymbol('');
			setTotal(null);
			setClearScreen(true);
		};

		switch (btn) {
			case '+':
				handleOperation(add, '+');
				break;
			case '-':
				handleOperation(substract, '-');
				break;
			case 'x':
				handleOperation(multiply, 'x');
				break;
			case '/':
				handleOperation(divide, '/');
				break;
			case '=':
				handleOperation();
				break;
			case 'del':
				handleDel();
				break;
			case 'reset':
				handleReset();
				break;
			default:
				handleNumb();
		}
	}; // end of handleBtnClick
	return { numPadBtns, handleBtnClick };
};

export default CalcNumPadFunctions;
