//? Import JSX so we can inject children elements into a Carousel Card
import { JSX } from "preact";

//? Define the required and optional properties of a Carousel Card
interface CarouselCardProperties {
  link: string;
  title: string;
  children?: JSX.Element;
}

//? Exports a Carousel Card with a centered h3 heading,
//? a link and a centered child
//! Needs to ship with carousel-card.css for styling!
export function CarouselCard(properties: CarouselCardProperties) {
  return (
    // Link
    <a href={properties.link}>
      <div class="card">
        {/* Centered heading */}
        <h3>{properties.title}</h3>
        {/* Centered child */}
        <div style="margin: auto;">{properties.children}</div>
      </div>
    </a>
  );
}
