export function HomeContent() {
  return (
    <>
      {/* Greeting */}
      <h1 class="inline-block text-4xl animate-to-top" style="--dur: 0">
        Hello!
      </h1>
      {/* Name */}
      <p class="block text-2xl ml-4 animate-to-top" style="--dur: 1">
        I am{" "}
        <strong>
          <span class="gradient-underline">TheYuriG</span>
          <span class="wave-emoji">👋</span>
        </strong>
      </p>
      {/* Skillset */}
      <p class="block text-2xl ml-8 animate-to-top" style="--dur: 2">
        Sky afficionado, gym rat, full stack developer
      </p>
      {/* Role */}
      <p class="block ml-12 animate-to-top" style="--dur: 3">
        Currently building greatness at{" "}
        <a href="https://trophy.place" target="_blank" class="pretty-link">
          Trophy Place
        </a>{" "}
        and blogging
        {/* Blinking caret */}
        <svg
          viewBox="0 0 4 8"
          xmlns="http://www.w3.org/2000/svg"
          class="inline-block blinking-caret"
        >
          <path d="M 0 0 L 4 0 L 4 1 L 2.5 1 L 2.5 7 L 4 7 L 4 8 L 0 8 L 0 7 L 1.5 7 L 1.5 1 L 0 1 L 0 0">
          </path>
        </svg>
      </p>
    </>
  );
}
