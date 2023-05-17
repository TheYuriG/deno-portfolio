//? Import hooks so a theme can be loaded on pageLoad and
//? set on a click to the Radio buttons
import { useState, useEffect } from 'preact/hooks';

//? Exports the ThemeSwitcher Island, so users can switch
//? themes, if so they desire
export default function ThemeSwitcher() {
	//? Manages the theme state
	const [theme, setTheme] = useState('');

	//? Loads current theme from localStorage, if one is saved.
	//! Uses default 'Dark' theme if no theme is set.
	//? Saves switched theme on change
	useEffect(() => {
		//? Check if the user has no current theme state and
		//? attempts to load from localStorage to find their
		//? saved option, in case they previously saved one
		if (theme === '') {
			setTheme(localStorage.getItem('theme') ?? 'Dark');
		}

		//? Saves current theme to local storage
		localStorage.setItem('theme', theme);

		//? Access the root element, where our styles were defined
		const cssRoot: HTMLElement | null = document.querySelector(':root');
		if (cssRoot !== null) {
			if (theme === 'Light') {
				// TW Slate 300 background color
				cssRoot.style.setProperty('--base-color', 'rgb(203 213 225)');
				// TW Slate 900 text color
				cssRoot.style.setProperty('--neutral-color', 'rgb(15 23 42)');
				// TW Red 600 accent
				cssRoot.style.setProperty('--accent-color', 'rgb(220 38 38)');
			} else {
				// TW Slate 900 background color
				cssRoot.style.setProperty('--base-color', 'rgb(15 23 42)');
				// TW Slate 300 text color
				cssRoot.style.setProperty('--neutral-color', 'rgb(203 213 225)');
				// TW Purple 700 accent
				cssRoot.style.setProperty('--accent-color', 'rgb(126 34 206)');
			}
		}
	}, [theme]);

	//? Array of possible themes. Here just so I can learn how
	//? render an array of items :)
	const themes: string[] = ['Dark', 'Light'];

	return (
		<>
			{/* Returns two labels and Radio buttons for Dark and Light themes */}
			{themes.map((themeOption) => (
				<label for={themeOption}>
					<input
						class="mr-1"
						type="radio"
						id={themeOption}
						name="theme"
						checked={theme == themeOption}
						onClick={() => {
							setTheme(themeOption);
						}}
					></input>
					{themeOption}
				</label>
			))}
		</>
	);
}
