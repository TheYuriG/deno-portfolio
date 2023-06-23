//? Head component with all Meta tags pre-set
import { CustomHead } from "../components/base/CustomHead.tsx";
//? Lateral text with theme switcher
import { Base } from "../components/base/Base.tsx";
//? Content displayed on the Home page, including header and navigation menu
import { HomeContent } from "../components/home/HomeContent.tsx";
//? Navigation Menu with redirects to different pages
import { NavigationMenu } from "../components/home/NavigationMenu.tsx";
//? Create a Starry Night background
import { StarryNight } from "../components/home/StarryNight.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Full Stack Development"
        description="Get to know more about Yuri's experience, thoughts and past projects."
        link="https://www.theyurig.com/"
      >
        <link rel="stylesheet" href="/starry-night.css" />
      </CustomHead>
      {/* Starry Night background <3 */}
      <StarryNight />
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        {/* Content with greeting, name, workplace */}
        <HomeContent />
        {/* Navigation menu to other routes */}
        <NavigationMenu />
      </Base>
    </>
  );
}
