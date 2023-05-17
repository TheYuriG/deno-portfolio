import ThemeSwitcher from '../islands/ThemeSwitcher.tsx';

//? Renders the sidebar responsible for switching themes
export function Aside() {
	return (
		<aside>
			<div class="absolute -translate-x-1/3 -translate-y-16 -rotate-90 bottom-10 flex flex-row text-xl space-x-2">
				<ThemeSwitcher />
			</div>
		</aside>
	);
}
