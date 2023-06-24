//? Head component with all Meta tags pre-set
import { CustomHead } from "../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../components/base/Base.tsx";
//? Default styled header
import { StyledHeader } from "../components/UI/StyledHeader.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import { BlogNavigationButtons } from "../components/blog/BlogNavigationButtons.tsx";
//? A HTML Link component to pre-format links and reduce boiletplate
import { GradientLink } from "../components/UI/GradientLink.tsx";

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
        <BlogNavigationButtons />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          {/* Title header */}
          <StyledHeader title="Past and Current work" />
          <p class="my-2 text-justify">
            I am the creator of{" "}
            <GradientLink
              content="Yura"
              newTab={true}
              link="https://discordapp.com/invite/j55v7pD"
              title="My Discord bot's support server."
            />, a PSN-related Discord bot, based on PSNProfiles.com data
            (2018-2023). I've also{" "}
            <GradientLink
              content="blogged"
              newTab={true}
              link="https://github.com/TheYuriG/blog_lessons/tree/master/discord_create_channels"
              title="My Medium post about how to create various things in Discord.JS v14."
            />{" "}
            about Discord.JS in the past, it has an amazing API.
          </p>
          <p class="my-2 text-justify">
            I've created{" "}
            <GradientLink
              content="RotMG Utility"
              newTab={true}
              link="https://github.com/TheYuriG/RotMG-Utility/releases"
              customRel="noopener noreferrer"
              title="Release repository for the RotMG app"
            />, a helper to managing trades from{" "}
            <GradientLink
              content="RealmEye.com"
              newTab={true}
              link="https://www.realmeye.com/current-offers"
              customRel="noopener noreferrer"
              title="RealmEye.com, the website that has everything related to Realm Of The Mad God game."
            />, the community website around{" "}
            <GradientLink
              content="Realm of the Mad God"
              newTab={true}
              link="https://www.realmofthemadgod.com/"
              customRel="noopener noreferrer"
              title="Realm of the Mad God, the game I made the app for."
            />{" "}
            (2020).
          </p>
          <p class="my-2 text-justify">
            In the following year, I started porting Yura's functionality from
            Discord to a{"  "}
            <GradientLink
              content="mobile/desktop app"
              newTab={true}
              link="https://github.com/TheYuriG/yura_app_repository"
              customRel="noopener noreferrer"
              title="Release repository for the Yura, as an app"
            />. I've made good progress, but it really didn't get where I wanted
            it to be, as I didn't like having to rely on another website's data.
            Eventually I shelved that project (2021).
          </p>
          <p class="my-2 text-justify">
            After freelancing for design agencies for a while, in 2022 I decided
            to eventually move out of freelancing and try to get a remote job in
            a tech company. Using Wix/SquareSpace/Framer templates to build
            websites was really wearing me off, since we were just building
            contract websites as fast as possible only to start the next. Just
            felt like the lack of testing, UX and post-launch care for the
            product wasn't like how WebDev was meant to be.
          </p>
          <p class="my-2 text-justify">
            I wasn't feeling like I was making any progress in becoming a
            serious full-stack developer, so I've bought some{" "}
            <GradientLink
              content="Udemy courses"
              newTab={true}
              link="https://www.udemy.com/certificate/UC-c14620b0-6803-48a3-a7ab-5211825cec51/"
              customRel="noopener noreferrer"
              title="My Node.JS backend certificate"
            />{" "}
            and actually become a more interesting potential employee.
          </p>
          <p class="my-2 text-justify">
            That got me to land some interviews, I even made some{" "}
            <GradientLink
              content="take-home assignments"
              newTab={true}
              link="https://github.com/TheYuriG/fullstackTodoApp"
              customRel="noopener noreferrer"
              title="A React Native assignment"
            />{" "}
            and experienced React Native for the first time (not wildly
            different from Flutter), but didn't really land anything other than
            more freelance work and some temporary contracts.
          </p>
          <p class="my-2 text-justify">
            Since I wasn't having much luck getting professionally into tech, in
            2023 I focused on fleshing out older projects I had, eventually
            starting{" "}
            <GradientLink
              content="Trophy Place"
              newTab={true}
              link="https://my.trophy.place/"
              title="More than just a passion project, Trophy Place will eventually become the defacto website for trophy hunting on PSN."
            />. My partner took over the frontend and I take care of the
            backend, which is currently written with Node.JS and Express, but I
            want to eventually rewrite it with Deno and Oak instead. Currently
            Trophy Place, this website and freelancing are my daily routine.
          </p>
          <p class="my-2 text-justify">
            This website has been specially useful into getting me to learn how
            to build things from scratch, like these:
          </p>
          <ol
            start={1}
            class="self-start list-[lower-greek]"
          >
            <li class="ml-10 lg:ml-0 transition-[margin-left] ease-in-out duration-500">
              <GradientLink
                content="Form (with validation)"
                title="A simple mock data form."
                link="/work/form"
                newTab={false}
              />
            </li>
          </ol>
        </article>
      </Base>
    </>
  );
}
