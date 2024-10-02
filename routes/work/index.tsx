//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../../components/base/Base.tsx";
//? Default styled header
import { StyledHeader } from "../../components/UI/StyledHeader.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import { NavigationButtons } from "../../components/misc/NavigationButtons.tsx";
//? A HTML Link component to pre-format links and reduce boiletplate
import { GradientLink } from "../../components/UI/GradientLink.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Previous work"
        description="Work that I've done for people in the past."
        link="https://www.theyurig.com/work"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <NavigationButtons />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Title header */}
          <StyledHeader title="Past and Current work" />
          <img
            src="https://images-ext-2.discordapp.net/external/MrGU7E1Vw1ks2LSlDu4fiYOrT8wgVB4fCfoxRii6SrE/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/555126737038737408/a61db2e4c1f0a92cacee54f7b1aea624.png?width=554&height=554"
            alt="Yura's latest avatar"
            class="my-4 mx-auto h-40 w-40"
          />
          <p class="my-2 text-justify">
            I am the creator of{" "}
            <GradientLink
              content="Yura"
              link="https://discordapp.com/invite/j55v7pD"
              title="My Discord bot's support server."
            />, a PSN-related Discord bot, based on PSNProfiles.com data
            (2018-2023). I maintained it and updated it weekly until they
            blocked all third-party requests to the website.
          </p>
          <iframe
            class="my-4"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/V0en08tuceY"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          >
          </iframe>
          <p class="my-2 text-justify">
            I've created{" "}
            <GradientLink
              content="RotMG Utility"
              link="https://github.com/TheYuriG/RotMG-Utility/releases"
              customRel="noopener noreferrer"
              title="Release repository for the RotMG app"
            />, a helper to managing trades from{" "}
            <GradientLink
              content="RealmEye.com"
              link="https://www.realmeye.com/current-offers"
              customRel="noopener noreferrer"
              title="RealmEye.com, the website that has everything related to Realm Of The Mad God game."
            />, the community website around{" "}
            <GradientLink
              content="Realm of the Mad God"
              link="https://www.realmofthemadgod.com/"
              customRel="noopener noreferrer"
              title="Realm of the Mad God, the game I made the app for."
            />{" "}
            (2020).
          </p>
          <img
            src="https://iili.io/dppsj0Q.md.png"
            alt="Yura's port to mobile/desktop"
            class="my-4 mx-auto w-full"
          />
          <p class="my-2 text-justify">
            In the following year, I started porting Yura's functionality from
            Discord to a{" "}
            <GradientLink
              content="mobile/desktop app"
              link="https://github.com/TheYuriG/yura_app_repository"
              customRel="noopener noreferrer"
              title="Release repository for the Yura, as an app"
            />. I've made good progress, but it really didn't get where I wanted
            it to be, as I didn't like having to rely on another website's data.
            Eventually I shelved that project (2021).
          </p>
          <p class="my-2 text-justify">
            I've been working as a contractor for design agencies since early
            2022, but using Wix/SquareSpace/Framer templates to build websites
            is really wearing me off, since we were just building contract
            websites as fast as possible only to start the next and repeat it
            all over again. It just doesn't feel like WebDev is meant to be.
          </p>
          <img
            src="https://iili.io/dppsOdB.png"
            alt="Trophy Place games page"
            class="my-4 mx-auto w-full"
          />
          <p class="my-2 text-justify">
            I've been focusing on fleshing out older projects I had, eventually
            starting{" "}
            <GradientLink
              content="Trophy Place"
              link="https://my.trophy.place/"
              title="More than just a passion project, Trophy Place will eventually become the defacto website for trophy hunting on PSN."
            />. My partner took over the frontend and I take care of the
            backend, which is currently written with Node.JS and Express, but
            will be rewritten it with Deno and Oak.
          </p>
          <p class="my-2 text-justify">
            Currently, Trophy Place, this website you are currently visiting,
            studying and my agency contract jobs are my daily{" "}
            <GradientLink
              content="coding routine"
              link="https://github.com/TheYuriG"
              title="My GitHub profile page."
            />.
          </p>
        </article>
      </Base>
    </>
  );
}
