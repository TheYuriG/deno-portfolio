//? Head component with all Meta tags pre-set
import { CustomHead } from "../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../components/base/Base.tsx";
//? Default styled header
import { StyledHeader } from "../components/UI/StyledHeader.tsx";
//? A HTML Link component to pre-format links and reduce boiletplate
import { GradientLink } from "../components/UI/GradientLink.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import { NavigationButtons } from "../components/misc/NavigationButtons.tsx";
import { StyledSubHeader } from "../components/UI/StyledSubHeader.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Tech stack certificates that I've earned for completing online courses"
        description="A gallery of my feats."
        link="https://www.theyurig.com/certificates"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <NavigationButtons />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          <StyledHeader title="Certificates" />
          {/* NodeJS backend certificate */}
          <StyledSubHeader title="NodeJS (Backend focused)" />
          <img
            src="https://udemy-certificate.s3.amazonaws.com/image/UC-c14620b0-6803-48a3-a7ab-5211825cec51.jpg?v=1685285730000"
            alt="NodeJS Backend Certificate"
            title="NodeJS Backend completion Certificate"
            class="object-cover max-h-[30em] max-w-full"
            style="aspect-ratio: 43/32;"
          />
          <GradientLink
            link="https://www.udemy.com/certificate/UC-c14620b0-6803-48a3-a7ab-5211825cec51/"
            content="View on Udemy"
            title="Certificate of the Node.JS backend course completion on Udemy."
            customRel="noopener noreferrer"
          />
          <p class="mt-2 mb-4 text-center text-justify w-full">
            This course enabled me building both (previously using Node/JS,
            currently with Deno/TS) backends of{" "}
            <GradientLink
              content="Trophy Place"
              link="https://trophy.place"
            />.
          </p>
          <StyledSubHeader title="React (+NextJS)" />
          {/* React and NextJS certificate */}
          <img
            src="https://udemy-certificate.s3.amazonaws.com/image/UC-7246cba0-de77-4a6f-81a4-2be5aaeaad67.jpg?v=1688062528000"
            alt="React18 Certificate"
            title="React and NextJS completion Certificate"
            class="object-cover max-h-[30em] max-w-full"
            style="aspect-ratio: 43/32;"
          />
          <GradientLink
            link="https://www.udemy.com/certificate/UC-7246cba0-de77-4a6f-81a4-2be5aaeaad67/"
            content="View on Udemy"
            title="Certificate of the ReactJS course completion on Udemy."
            customRel="noopener noreferrer"
          />
          <p class="mt-2 mb-4 text-center text-justify w-full">
            This course helped me brushing up my React skillset. Although I had
            8 months of prior freelance experience with React when I started
            this course, I learned a lot of fundamentals that I didn't know and
            I now feel that I have a very strong foundation of how React works
            internally because of this. I was able to make some improvements to
            this website because I finally learned how to apply{" "}
            <span class="shl-inline">useRef</span> effectively instead of{" "}
            <GradientLink
              link="https://github.com/TheYuriG/deno-portfolio/commit/6ee8aab60851f80217a70f72e293ca13e173f203#comments"
              content="using pure Javascript"
              title="GitHub link to the related commit"
              customRel="noopener noreferrer"
            />.
          </p>
        </article>
      </Base>
    </>
  );
}
