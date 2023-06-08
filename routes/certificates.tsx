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
        title="Various certificates earned while completing courses"
        description="A small gallery of my feats."
        link="https://www.theyurig.com/certificates"
      >
        <link rel="stylesheet" href="/navigation-buttons.css" />
        <link rel="stylesheet" href="/content.css" />
        <link rel="stylesheet" href="/blog.css" />
        <link rel="stylesheet" href="/gradient-underline.css" />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        <BlogNavigationButtons />
        <article class="center">
          <h1 class="blog-title">Certificates</h1>
          <img
            src="https://udemy-certificate.s3.amazonaws.com/image/UC-c14620b0-6803-48a3-a7ab-5211825cec51.jpg?v=1685285730000"
            alt="NodeJS Backend Certificate"
            title="NodeJS Backend completion Certificate"
            class="large-image"
          />
          <p class="text-center w-full m-0">
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
