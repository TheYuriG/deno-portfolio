export function NavigationMenu() {
  return (
    <nav
      class="flex flex-col p-4 items-end absolute bottom-0 right-0"
      style="font-family: 'Alfa Slab One', cursive;"
    >
      <a href="/work" class="navigation-link" title="Relevant work experience">
        Work
      </a>
      <a href="/toys" class="navigation-link" title="Curiosity projects">
        Toys
      </a>
      <a
        href="/blog"
        class="navigation-link"
        title="Development findings shared over the years"
      >
        Blog
      </a>
      <a href="/me" class="navigation-link" title="Who is Yuri?">
        Me
      </a>
      <a
        href="/this"
        class="text-sm"
        style="color: yellow; margin-top: 2em;"
        title="information about how this website is built"
      >
        this
      </a>
    </nav>
  );
}
