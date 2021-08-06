import CalcSectionBackgroundSty from '../../../styles/CalcSectionBackground.styles';
import ThemeTogglerSty from './ThemeToggler.styles';

const ThemeToggler = ({ theme, toggleTheme }) => {
	const themesList = [1, 2, 3];

	return (
		<ThemeTogglerSty>
			<div className="theme-toggler__title">
				<div>theme</div>
			</div>
			<div className="theme-toggler__theme-list">
				{themesList.map((themeItem) => (
					<div
						key={themeItem}
						className="theme-toggler__theme-list__number"
					>
						{themeItem}
					</div>
				))}
				<CalcSectionBackgroundSty
					className="theme-toggler__selector-container"
					bgColor={theme.padAndTogglerBackground}
					borderRadius="20px"
					onClick={toggleTheme}
				>
					<div className="theme-toggler__selector" />
				</CalcSectionBackgroundSty>
			</div>
		</ThemeTogglerSty>
	);
};

export default ThemeToggler;
