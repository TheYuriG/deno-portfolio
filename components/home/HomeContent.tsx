//? Link component to prettify links
import { DottedLink } from "../UI/DottedLink.tsx";

const hello = <h1
  class="inline-block m-6 text-4xl animate-slide-top delay-slide-top"
  style="--dur: 0;"
>
  Hello!
</h1>

const myNameIs = <p
  class="block text-2xl ml-10 mb-6 animate-slide-top delay-slide-top"
  style="--dur: 0.5;"
>
  My name is{" "}
  <strong class="group">
    <DottedLink content="Yuri" link="/me" />.
    <span class="hidden group-hover:inline-block animate-waving">
      👋
    </span>
  </strong>
</p>

const titles = <p
  class="block text-xl ml-16 animate-slide-top delay-slide-top"
  style="--dur: 1;"
>
  Sky Afficionado, Gym Rat, Full Stack Developer;
</p>

const currentOcupations = <p
  class="block ml-16 text-xl animate-slide-top delay-slide-top"
  style="--dur: 1.5;"
>
  Working as a Networking Engineer at <DottedLink content="NWT Internet" link="https://nwt.net.br/" />, and{" "}
  < DottedLink content="coding" link="./tools" />/
  <DottedLink content="blogging" link="./blog" /> on the side
  {/* Blinking caret */}
  <svg
    viewBox="0 0 4 8"
    xmlns="http://www.w3.org/2000/svg"
    class="inline-block fill-(--neutral-color) relative h-5 animate-blinking"
  >
    <path d="M 0 0 L 4 0 L 4 1 L 2.5 1 L 2.5 7 L 4 7 L 4 8 L 0 8 L 0 7 L 1.5 7 L 1.5 1 L 0 1 L 0 0">
    </path>
  </svg>
</p>

export function HomeContent() {
  return (
    <>
      {hello}
      {myNameIs}
      {titles}
      {currentOcupations}
    </>
  );
}
