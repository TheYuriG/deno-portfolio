//? Renders the sidebar responsible for switching themes
export function Aside() {
	return (
		<aside>
			<div class="absolute flex flex-row -left-14 bottom-24 text-xl -rotate-90 ml-2 mb-2 space-x-2">
				<label for="dark">
					<input class="mr-1" type="radio" id="dark" name="theme" checked></input>
					Dark
				</label>
				<label for="light">
					<input class="mr-1" type="radio" id="light" name="theme"></input>
					Light
				</label>
			</div>
		</aside>
	);
}
