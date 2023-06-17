//? HTML Head to import CSS and fonts
import { Head } from "$fresh/runtime.ts";
import { toChildArray } from "preact";
import { JSX } from "preact/jsx-runtime";

//? Define required properties for this Head
interface HeadOptions {
  title: string;
  description: string;
  link?: string;
  imageLink?: string;
  children: JSX.Element | JSX.Element[];
}

//? Creates and exports the Head to be used on all pages
export function CustomHead(
  { title, description, imageLink, link, children }: HeadOptions,
) {
  return (
    <>
      <Head>
        <title>{title} | TheYuriG</title>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="TheYuriG" />
        <meta property="og:description" content={description} />
        <meta name="description" content={description} />
        <meta property="og:type" content="blog" />
        {imageLink &&
          (
            <meta
              property="og:image"
              content={imageLink}
            />
          )}
        <meta
          property="og:url"
          content={link ?? "https://www.theyurig.com"}
        />
        <script src="/themeSwitcherMinified.js"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Fragment+Mono&family=Kanit:wght@400;700&display=swap"
          rel="stylesheet"
        >
        </link>
        <link
          href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap"
          rel="stylesheet"
        >
        </link>
        {...toChildArray(children)}
      </Head>
    </>
  );
}
