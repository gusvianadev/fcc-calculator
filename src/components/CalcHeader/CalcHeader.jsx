import CalcHeaderSty from './CalcHeader.styles';
import ThemeToggler from './ThemeToggler/ThemeToggler';

const CalcHeader = ({ theme, toggleTheme }) => (
	<CalcHeaderSty>
		<h2 className="calc-header__title">
			<div>calc</div>
		</h2>
		<ThemeToggler theme={theme} toggleTheme={toggleTheme} />
	</CalcHeaderSty>
);

export default CalcHeader;
