//? Head component with all Meta tags pre-set
import { CustomHead } from "../components/base/CustomHead.tsx";
//? Create blog content inside Base component
import { Base } from "../components/base/Base.tsx";
//? Default styled header
import { StyledHeader } from "../components/UI/StyledHeader.tsx";
//? A HTML Link component to pre-format links and reduce boiletplate
import { GradientLink } from "../components/base/GradientLink.tsx";
//? Navigation Buttons to go back to the previous page or to the next article
import { BlogNavigationButtons } from "../components/blog/BlogNavigationButtons.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        title="Various certificates earned while completing courses"
        description="A small gallery of my feats."
        link="https://www.theyurig.com/certificates"
      >
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons />
        <article class="flex flex-col h-full w-full max-w-4xl mx-auto items-center">
          <StyledHeader title="Certificates" />
          {/* Udemy backend NodeJS certificate */}
          <img
            src="https://udemy-certificate.s3.amazonaws.com/image/UC-c14620b0-6803-48a3-a7ab-5211825cec51.jpg?v=1685285730000"
            alt="NodeJS Backend Certificate"
            title="NodeJS Backend completion Certificate"
            class="my-4 object-cover max-h-[20em]"
          />
          <p class="text-center w-full">
            <GradientLink
              link="https://www.udemy.com/certificate/UC-c14620b0-6803-48a3-a7ab-5211825cec51/"
              content="View on Udemy"
              title="Certificate of the Node.JS backend course completion on Udemy."
              customRel="noopener noreferrer"
            />
          </p>
        </article>
      </Base>
    </>
  );
}
