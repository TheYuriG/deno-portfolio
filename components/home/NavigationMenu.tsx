export function NavigationMenu() {
  return (
    <nav
      class="flex flex-col absolute items-end p-4 bottom-0 right-0"
      style="font-family: 'Alfa Slab One', cursive;"
    >
      <a
        href="/work"
        class="custom-underline-thick custom-font-scale-largest animate-slide-right delay-slide-right"
        style="--dur: 1"
        title="Things I've done for money"
      >
        Work
      </a>
      <a
        href="/tools"
        class="custom-underline-thick custom-font-scale-largest animate-slide-right delay-slide-right"
        style="--dur: 1.5;"
        title="Things I've created because I needed something to exist and I couldn't find anyone else that built it exactly how I needed it."
      >
        Tools
      </a>
      <a
        href="/projects"
        class="custom-underline-thick custom-font-scale-largest animate-slide-right delay-slide-right"
        style="--dur: 1.5;"
        title="Things I've created to learn a tech stack"
      >
        Projects
      </a>
      <a
        href="/certificates"
        class="custom-underline-thick custom-font-scale-largest animate-slide-right delay-slide-right"
        style="--dur: 2;"
        title="Cerfications I've got from completing various courses"
      >
        Certificates
      </a>
      <a
        href="/toys"
        class="custom-underline-thick custom-font-scale-largest animate-slide-right delay-slide-right"
        style="--dur: 2;"
        title="Curiosity projects"
      >
        Toys
      </a>
      <a
        href="/blog"
        class="custom-underline-thick custom-font-scale-largest animate-slide-right delay-slide-right"
        style="--dur: 1.5;"
        title="Development findings shared over the years"
      >
        Blog
      </a>
      <a
        href="/me"
        class="custom-underline-thick custom-font-scale-largest animate-slide-right delay-slide-right"
        style="--dur: 1;"
        title="Who is Yuri?"
      >
        Me
      </a>
      <a
        href="/what-is-this"
        class="text-sm animate-slide-right delay-slide-right"
        style="color: yellow; margin-top: 2em; --dur: 2;"
        title="Information about how this website is built"
      >
        this
      </a>
    </nav>
  );
}
