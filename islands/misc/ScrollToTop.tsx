//? Manage window scroll state
import { useEffect, useState } from "preact/hooks";
//? Renders the ArrowUp SVG within
import { ArrowUpIcon } from "../../assets/ArrowUpIcon.tsx";

//? Dynamically display a 'scroll to top' button on the bottom right corner after
//? the screen scrolled past 1000 pixels from top
export default function ScrollToTop() {
  //? Tracks the scroll position, set by the useEffect() below
  const [scrollTop, setScrollTop] = useState(0);

  //? Create and destroy an event listener for scroll position on
  //? component mount/unmount
  useEffect(() => {
    //? Create the function that will update the scroll tracking state
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    //? Add a scroll event listener when this component is mounted
    addEventListener("scroll", handleScroll);

    //? Ensure to remove the scroll event listener when the component is unmounted
    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    //? Anchor tag to scroll to the #top
    <a
      href="#top"
      title="Click to scroll back to the top. Works 60% of the time!"
    >
      {/* Outer circle that will get faded in and out */}
      <div
        class={`w-14 h-14 ${
          scrollTop < 1000 ? "invisible opacity-0" : "opacity-1"
        } fixed right-5 bottom-8 duration-1000 transition-opacity custom-bg-bc custom-bo-ac rounded-full border-4`}
      >
        {/* Inner circle that renders the SVG centered */}
        <div class="flex h-full items-center justify-center">
          <ArrowUpIcon iconHeight="2em" iconWidth="2em" />
        </div>
      </div>
    </a>
  );
}
