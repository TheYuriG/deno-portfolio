export function NavigationMenu() {
  return (
    <nav
      class="flex flex-col p-4 items-end absolute bottom-0 right-0"
      style="font-family: 'Alfa Slab One', cursive;"
    >
      <a
        href="/work"
        class="navigation-link animate-slide-right delay-slide-right"
        style="--dur: 1"
        title="Things I've done for money"
      >
        Work
      </a>
      <a
        href="/projects"
        class="navigation-link animate-slide-right delay-slide-right"
        style="--dur: 1.5;"
        title="Things I've created to learn a tech stack"
      >
        Projects
      </a>
      <a
        href="/certificates"
        class="navigation-link animate-slide-right delay-slide-right"
        style="--dur: 2;"
        title="Cerfications I've got from completing various courses"
      >
        Certificates
      </a>
      <a
        href="/toys"
        class="navigation-link animate-slide-right delay-slide-right"
        style="--dur: 2;"
        title="Curiosity projects"
      >
        Toys
      </a>
      <a
        href="/blog"
        class="navigation-link animate-slide-right delay-slide-right"
        style="--dur: 1.5;"
        title="Development findings shared over the years"
      >
        Blog
      </a>
      <a
        href="/me"
        class="navigation-link animate-slide-right delay-slide-right"
        style="--dur: 1;"
        title="Who is Yuri?"
      >
        Me
      </a>
      <a
        href="/what-is-this"
        class="text-sm animate-slide-right delay-slide-right"
        style="color: yellow; margin-top: 2em; --dur: 2;"
        title="information about how this website is built"
      >
        this
      </a>
    </nav>
  );
}
