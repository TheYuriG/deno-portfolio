//? Import JSX so we can inject children elements into a Carousel Card
import { JSX } from "preact";

//? Define the required and optional properties of a Carousel Card
interface CarouselCardProperties {
  link: string;
  title: string;
  children: JSX.Element;
}

//? Exports a Carousel Card with a centered h3 heading,
//? a link and a centered child
//! Needs to ship with carousel-card.css for styling!
export function CarouselCard(
  { link, title, children }: CarouselCardProperties,
) {
  return (
    // Link
    <a href={link}>
      <div
        class="flex flex-col m-2 h-[25em] w-60 custom-bo-nc rounded-3xl hover:animate-card-pulse"
        style="border-width: 0.25em;"
      >
        {/* Centered heading */}
        <h3 class="text-2xl my-4 mx-auto text-center text-bold">{title}</h3>
        {/* Centered child */}
        <div class="m-auto">{children}</div>
      </div>
    </a>
  );
}
