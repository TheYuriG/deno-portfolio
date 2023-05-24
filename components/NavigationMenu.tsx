export function NavigationMenu() {
  return (
    <nav
      class="flex flex-col p-4 items-end absolute bottom-0 right-0"
      style="font-family: 'Alfa Slab One', cursive;"
    >
      <a
        href="/work"
        class="navigation-link animate-to-right"
        style="--dur: 3.8;"
        title="Things I've done for money"
      >
        Work
      </a>
      <a
        href="/toys"
        class="navigation-link animate-to-right"
        style="--dur: 5;"
        title="Curiosity projects"
      >
        Toys
      </a>
      <a
        href="/blog"
        class="navigation-link animate-to-right"
        style="--dur: 6;"
        title="Development findings shared over the years"
      >
        Blog
      </a>
      <a
        href="/me"
        class="navigation-link animate-to-right"
        style="--dur: 7;"
        title="Who is Yuri?"
      >
        Me
      </a>
      <a
        href="/what-is-this"
        class="text-sm animate-to-right"
        style="color: yellow; margin-top: 2em; --dur: 8;"
        title="information about how this website is built"
      >
        this
      </a>
    </nav>
  );
}
