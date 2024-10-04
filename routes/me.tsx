//? Head component with all Meta tags pre-set
import { CustomHead } from "../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../components/base/Base.tsx";
//? Default styled headers
import { StyledHeader } from "../components/UI/StyledHeader.tsx";
import { StyledSubHeader } from "../components/UI/StyledSubHeader.tsx";
//? A HTML Link component to pre-format links and reduce boiletplate
import { GradientLink } from "../components/UI/GradientLink.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import { NavigationButtons } from "../components/misc/NavigationButtons.tsx";

const pictureYuriLink =
  "https://iili.io/29Dfzhb.jpg";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Who am I?"
        description="Some details on who is the person behind TheYuriG."
        link="https://www.theyurig.com/me"
        imageLink={pictureYuriLink}
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <NavigationButtons />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          <StyledHeader title="Who is TheYuriG?" />
          <img
            src={pictureYuriLink}
            alt="Yuri on the right, standing sideways, looking left with his arms crossed. The entire ground is sand, the background is a rock all and the sun is at 45 degrees creating large shadows."
            title="Jericoacoara, Ceará, Brazil"
            class="my-4 max-h-88 max-w-56 object-cover"
          />

          <p class="my-2 text-justify">
            I'm Yuri Gabriel, also known online as{" "}
            <GradientLink
              link="https://github.com/TheYuriG"
              content="TheYuriG"
              title="Hi, this is me!"
              customRel="noopener noreferrer"
            />. I used to be a{" "}
            <GradientLink
              link="https://psnprofiles.com/TheYuriG"
              content="hardcore gamer"
              title="My 'retired' gaming profile"
              customRel="external"
            />
            , but now obsessed with writing code and creating pretty things to
            look at and fun to use.
          </p>
          <p class="my-2 text-justify">
            For some good portion of the most last decade, I was using the
            majority of my free time earning some of the hardest trophies out
            there on PSN, never shying away from the next hard game to complete.
          </p>
          <p class="my-2 text-justify">
            Trophy hunting, while fun, often times can feel like another job.
            You often feel like you have to track so many moving parts at once
            to make sure you don't miss anything and you stay efficient.
          </p>

          <StyledSubHeader title="Programming" />
          <p class="my-2 text-justify">
            In late 2017, I felt like trophy hunting would be greatly improved
            if we could get a way to link and display our trophies on Discord,
            but no bots out there offered this kind of data.
          </p>
          <p class="my-2 text-justify">
            After searching far and wide and not really getting anywhere with
            it, in March 2018 I decided that if no one was willing to create a
            Discord bot for trophy hunting, then I was going to need to{" "}
            <GradientLink
              link="https://www.youtube.com/watch?v=EzWNBmjyv7Y"
              content="do it myself"
              title="Just like Thanos"
              customRel="noopener noreferrer"
            />. And so I did, I learned how to write Javascript and started
            Yura.
          </p>
          <img
            src="https://images-ext-2.discordapp.net/external/MrGU7E1Vw1ks2LSlDu4fiYOrT8wgVB4fCfoxRii6SrE/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/555126737038737408/a61db2e4c1f0a92cacee54f7b1aea624.png?width=554&height=554"
            alt="Yura's latest avatar"
            class="my-4 mx-auto h-40 w-40"
          />
          <p class="my-2 text-justify">
            I've kept maintainining and adding new features to Yura for several
            years, before it ultimately collapsed when its data source killed
            all external access by implementing a stronger DDoS protection
            through Cloudflare.
          </p>
          <p class="my-2 text-justify">
            Myself and a few other members had been asking for several new
            features for years, but ultimately all of our feedback fell in deaf
            ears. It couldn't go on like that anymore, something had to be done
            about it.
          </p>
          <StyledSubHeader title="Trophy Place" />
          <p class="my-2 text-justify">
            Myself and{" "}
            <GradientLink
              link="https://github.com/Makowo"
              content="Makowo"
              title="Professional Payday 2 modder and ModWorkshop moderator"
              customRel="noopener noreferrer"
            />{" "}
            decided to start our own trophy hunting website that would end up
            addressing the majority of the community requests and complaints.
            After all, who knows better what the trophy hunting community wants,
            if not the community itself?
          </p>
          <p class="my-2 text-justify">
            Since I've already had some experience building the backend, I chose
            to manage all of the infrastructure for{" "}
            <GradientLink
              link="https://trophy.place/"
              content="Trophy Place (inactive)"
              title="Where we built greatness 😊"
              customRel="external"
            />{" "}
            while Makowo was responsible for the frontend.
          </p>
          <p class="my-2 text-justify">
            Our chosen tech stack is{" "}
            <GradientLink
              link="https://vuejs.org/"
              content="Vue 3"
              title="It means 'View' in french and 'Delight' in software development"
              customRel="noopener noreferrer"
            />{" "}
            +{" "}
            <GradientLink
              link="https://nuxt.com/"
              content="Nuxt 3"
              customRel="noopener noreferrer"
            />{" "}
            for the frontend, with{" "}
            <GradientLink
              link="https://expressjs.com/"
              content="Express"
              title="Express is basically the backbone of NodeJS development."
              customRel="noopener noreferrer"
            />{" "}
            for the backend for our MVP.
          </p>
          <p class="my-2 text-justify">
            It has been a gargantuan task to build everything with just the two
            of us, but we made good progress and hosted a few open betas, which
            got us good feedback. We are currently tinkering away just the two
            of us before we do the full launch.
          </p>
        </article>
      </Base>
    </>
  );
}
