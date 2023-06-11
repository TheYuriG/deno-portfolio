//? Create blog content inside Base component
import { Base } from "../components/base/Base.tsx";
//? Head component with all Meta tags pre-set
import { CustomHead } from "../components/base/CustomHead.tsx";
//? A HTML Link component to pre-format links and reduce boiletplate
import { GradientLink } from "../components/base/GradientLink.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import BlogNavigationButtons from "../components/blog/BlogNavigationButtons.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Who am I?"
        description="Some details on who is the person behind TheYuriG."
        link="https://www.theyurig.com/me"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          <h1 class="f-as my-4 text-2xl lg:text-4xl text-center">
            Who is TheYuriG?
          </h1>
          <img
            src="https://media.discordapp.net/attachments/576538316296421399/1111343977736712232/23112022-IMG_0537.jpg?width=884&height=554"
            alt="A picture of Yuri, in a very sandy vacation."
            title="Inked them ankles"
            class="my-4 object-cover"
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
              link="https://trophy.place/user/TheYuriG"
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
            to make sure you don't miss anything and you stay efficient,
            otherwise you either never complete your backlog, or tank your
            average completion or end up adding some unobtainable trophies to
            your account.
          </p>
          <h2 class="text-3xl my-2 f-as">Gym</h2>
          <p class="my-2 text-justify">
            I'm an absolute gym rat. It's part of my routine to write code and
            {" "}
            <GradientLink
              link="https://youtu.be/4UlgXIL0-3g?t=10"
              content="lift heavy ass circles"
              title="Ronnie Coleman, the Greatest Of All Time"
              customRel="noopener noreferrer"
            />
            , almost every single day. Rest days are really important... for
            people settling to{" "}
            <GradientLink
              link="https://youtu.be/PNO2yxuzm04?t=76"
              content="be smaller"
              customRel="noopener noreferrer"
            />{" "}
            than they could be.
          </p>
          <p class="my-2 text-justify">
            I track my physical/body progress every week on Instagram and it has
            been inspiring for some of my peers to watch my progress, but I
            honestly have no desire of becoming a celebrity. It's so easy to
            waste so much good useful time on social media and I feel far more
            productive on days where I barely look at my phone.
          </p>
          <p class="my-2 text-justify">
            I've had people asking me what is my secret for changing so much and
            the truth is that there is no secret. If you just eat properly,
            sleep enough, and push your limit as often as possible (with proper
            form), you will grow bigger. Your muscles simply don't know that
            they are being forced so hard because you are a masochist, they just
            assume you are going through extreme survival scenarios and more
            muscle is needed for increased odds at your survival. It's just that
            simple. When in doubt, simply{" "}
            <GradientLink
              link="https://www.youtube.com/watch?v=bGhBbpObA7s"
              content="we go jim"
              customRel="noopener noreferrer"
            />!
          </p>

          <h2 class="text-3xl my-2 f-as">Programming</h2>
          <p class="my-2 text-justify">
            In late 2017, I felt like trophy hunting would be greatly improved
            if we could get a way to link and display our trophies on Discord,
            but no bots out there offered this kind of data.
          </p>
          <p class="my-2 text-justify">
            After not really getting anywhere with it, in March 2018 I decided
            that if no one was willing to create a Discord bot for trophy
            hunting, then I was going to need to{" "}
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
          <h2 class="text-3xl my-2 f-as">Trophy Place</h2>
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
              content="Trophy Place"
              title="Where we build greatness 😊"
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
            for the backend for our MVP. Once we go into actual production, I'll
            rewrite the backend using{" "}
            <GradientLink
              link="https://github.com/oakserver/oak"
              content="Oak"
              title="It's like Koa, but for Deno"
              customRel="noopener noreferrer"
            />{" "}
            so that I can write exclusively Typescript code.
          </p>
        </article>
      </Base>
    </>
  );
}
