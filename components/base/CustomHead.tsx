//? HTML Head to import CSS and fonts
import { Head } from "$fresh/runtime.ts";
import { toChildArray } from "preact";
import { JSX } from "preact/jsx-runtime";

//? Define required properties for this Head
interface HeadOptions {
  title: string;
  description: string;
  link?: string;
  children: JSX.Element | JSX.Element[];
}

//? Creates and exports the Head to be used on all pages
export function CustomHead(options: HeadOptions) {
  return (
    <>
      <Head>
        <title>{options.title} | TheYuriG</title>
        <meta property="og:title" content={options.title} />
        <meta property="og:site_name" content="TheYuriG" />
        <meta property="og:description" content={options.description} />
        <meta property="description" content={options.description} />
        <meta property="og:type" content="blog" />
        {
          /* Image tag, if I ever put one <meta
					property="og:image"
					content="https://rockcontent.com/br/wp-content/uploads/sites/2/2014/09/zuckerberg-620×316.png"
				/> */
        }
        <meta
          property="og:url"
          content={options.link ?? "https://www.theyurig.com/blog"}
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
        <link rel="stylesheet" href="/base.css" />
        {...toChildArray(options.children)}
      </Head>
    </>
  );
}
