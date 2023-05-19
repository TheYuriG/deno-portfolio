export function NavigationMenu() {
	return (
		<nav
			class="flex flex-col p-4 items-end absolute bottom-0 right-0"
			style="font-family: 'Alfa Slab One', cursive;"
		>
			<a href="/work" class="navigation-link">
				Work
			</a>
			<a href="/toys" class="navigation-link">
				Toys
			</a>
			<a href="/blog" class="navigation-link">
				Blog
			</a>
			<a href="/me" class="navigation-link">
				Me
			</a>
			<a href="/this" class="text-sm" style="color: yellow; margin-top: 2em;">
				this
			</a>
		</nav>
	);
}
