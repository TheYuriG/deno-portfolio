import { GradientLink } from "../UI/GradientLink.tsx";

export function HomeContent() {
  return (
    <>
      {/* Greeting */}
      <h1
        class="inline-block text-4xl animate-slide-top delay-slide-top"
        style="--dur: 0;"
      >
        Hello!
      </h1>
      {/* Name */}
      <p
        class="block text-2xl ml-4 animate-slide-top delay-slide-top"
        style="--dur: 0.5;"
      >
        My name is{" "}
        <strong class="group">
          <span class="custom-underline-dotted hover:custom-tx-ac">
            Yuri
          </span>
          <span class="hidden group-hover:inline-block group-hover:animate-waving">
            👋
          </span>
        </strong>
      </p>
      {/* Skillset */}
      <p
        class="block text-2xl ml-8 animate-slide-top delay-slide-top"
        style="--dur: 1;"
      >
        Sky afficionado, gym rat, full stack developer
      </p>
      {/* Role */}
      <p
        class="block ml-12 animate-slide-top delay-slide-top"
        style="--dur: 1.5;"
      >
        Building the next-gen Trophy Hunting website at{" "}
        <GradientLink
          content="Trophy Place"
          link="https://trophy.place"
        />{" "}
        and blogging
        {/* Blinking caret */}
        <svg
          viewBox="0 0 4 8"
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block fill-[var(--neutral-color)] relative h-5 animate-blinking"
        >
          <path d="M 0 0 L 4 0 L 4 1 L 2.5 1 L 2.5 7 L 4 7 L 4 8 L 0 8 L 0 7 L 1.5 7 L 1.5 1 L 0 1 L 0 0">
          </path>
        </svg>
      </p>
    </>
  );
}
