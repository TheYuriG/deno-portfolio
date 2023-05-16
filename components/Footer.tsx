//? This exports the footer that is located on the bottom right corner
//? of the Home page. All related CSS is in the file.css file
export function Footer() {
	return (
		<footer>
			Built with
			<a href="https://github.com/denoland/fresh">
				<img
					src="fresh-logo.png"
					alt="Fresh's logo'"
					title="Fresh, the official framework to build Web apps on Deno"
				></img>
			</a>
			and
			<a href="https://deno.com/runtime">
				<img
					src="deno-logo.svg"
					alt="Deno's logo"
					title="Deno, Ryan Dahl's second attempt to make Javascript the best Language in the planet"
				></img>
			</a>
			using
			<a href="https://www.typescriptlang.org/">
				<img
					src="ts-logo-128.svg"
					alt="Typescript's logo"
					title="Logo for the Typescript Programming Language"
				></img>
			</a>
			and{' '}
			<a href="https://github.com/TheYuriG">
				<span class="ml-1" title="Love, the reason why I write code every single day">
					❤️
				</span>
			</a>
		</footer>
	);
}
