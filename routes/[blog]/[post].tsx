//? Head component with all Meta tags pre-set
import { CustomHead } from "../../components/CustomHead.tsx";
//? Lateral text with theme switcher
import { Base } from "../../components/Base.tsx";
//? Navigation Buttons to go back to the previous page or to the next page (optional)
import BlogNavigationButtons from "../../islands/BlogNavigationButtons.tsx";
//? To know what is the current route
import { PageProps } from "$fresh/server.ts";
//? To define types as JSX.Element
import { JSX } from "preact";

//? Possible options of content
enum contentPieceType {
  Text = "text",
  Image = "image",
  LargeImage = "largeImage",
  CodeBlock = "codeBlock",
  InlineBlock = "inlineCode",
}
//? How content pieces are created
type ContentPìece =
  // Simple string types: Text (<p>), CodeBlock <div>, Image and LargeImage (both <img>)
  | [
    (
      | contentPieceType.Text // Pure text paragraph
      | contentPieceType.Image // URL string
      | contentPieceType.LargeImage // URL string
      | contentPieceType.CodeBlock // Self contained code block
    ),
    string, // All of the types above are simple strings
  ]
  // Array of strings type: InlineBlock (<p><span?></p>)
  | [
    contentPieceType.InlineBlock, // Paragraph with nested code spans
    string[], // Array of strings. A string surrounded by trailing and
    // leading ` will be converted to an inline code block
  ];

//? All the data a post is required to have
interface CompletePost {
  title: string;
  content: ContentPìece[];
  date: number;
  author: string;
}

//? Regex for inline code blocks
const inlineCodeSpanCreatorRegex = new RegExp(/^`.*`$/);

//? Exports a single Blog Post Summary
export default function CompleteBlogPost(props: PageProps) {
  const { post } = props.params;

  //? Mock post data
  const currentPost: CompletePost = fetchPost(post);

  return (
    <>
      <CustomHead
        title="Blog"
        description="Blog posts and articles about my experience with certain tech stacks or situations I had to untangle myself out of."
        link="https://www.theyurig.com/blog"
      >
        <link rel="stylesheet" href="/home.css" />
        <link rel="stylesheet" href="/navigation-buttons.css" />
        <link rel="stylesheet" href="/content.css" />
        <link rel="stylesheet" href="/blog.css" />
        <link rel="stylesheet" href="/syntax-highlighting.css" />
        {
          /* Syntax highlight for code. How can we do this better
            so we don't cause Cumulative Layout Shift?
            There must be a better way... */

          // Checked March 23rd, 2023 and there is currently no better
          // option for Deno. As for NPM packages, options to consider are
          // rc-highlight: https://www.npmjs.com/package/rc-highlight
          // and lowlight: https://github.com/wooorm/lowlight
        }
        <script
          type="module"
          dangerouslySetInnerHTML={{
            __html:
              `import { highlightAll } from 'https://unpkg.com/@speed-highlight/core/dist/index.js';
            highlightAll();`,
          }}
        />
      </CustomHead>
      {/* Base page layout with theme switching and footer outside of accent box */}
      <Base>
        {/* Back button */}
        <BlogNavigationButtons />
        {/* Complete Post */}
        <article class="center">
          {/* Centered heading */}
          <h2 class="navigation-link blog-title">{currentPost.title}</h2>
          {/* Post creation date */}
          <p class="post-date">{new Date(currentPost.date).toLocaleString()}</p>
          {/* Post content, parsed and spread */}
          <div class="justified">{...contentParser(currentPost.content)}</div>
          {/* Post author */}
          <footer class="blog-footer" style="margin-top: auto;">
            {currentPost.author}
          </footer>
        </article>
      </Base>
    </>
  );
}

//? Parses content to be used as Post Content
function contentParser(content: ContentPìece[]): JSX.Element[] {
  //? Initializes the Array that will hold all the JSX elements to be rendered
  const parsedContent: JSX.Element[] = [];

  //? Loop through all the content, push appropriate elements to parsedContent[]
  for (let pieceIndex = 0; pieceIndex < content.length; pieceIndex++) {
    //? Destructure the content for legibility
    const [contentType, contentValue] = content[pieceIndex];

    //? Use a switch-case to process the blog content for better performance
    switch (contentType) {
      case contentPieceType.Text:
        parsedContent.push(<p>{contentValue}</p>);
        break;
      case contentPieceType.Image:
        parsedContent.push(
          <img
            src={contentValue}
            class="small-image"
          />,
        );
        break;
      case contentPieceType.LargeImage:
        parsedContent.push(
          <img src={contentValue} class="large-image" />,
        );
        break;
      case contentPieceType.InlineBlock: {
        const inlineCodeBlockContent: JSX.Element[] = [];
        for (
          let subContentIndex = 0;
          subContentIndex < contentValue.length;
          subContentIndex++
        ) {
          if (inlineCodeSpanCreatorRegex.test(contentValue[subContentIndex])) {
            inlineCodeBlockContent.push(
              <code class="shj-lang-js">
                {contentValue[subContentIndex].replace(/^`|`$/g, "")}
              </code>,
            );
          } else {
            inlineCodeBlockContent.push(<>{contentValue[subContentIndex]}</>);
          }
        }
        parsedContent.push(
          <p>
            {inlineCodeBlockContent}
          </p>,
        );
        break;
      }
      case contentPieceType.CodeBlock:
        parsedContent.push(
          <div class="shj-lang-js">
            {contentValue}
          </div>,
        );
        break;
      default: {
        const thisShouldNeverRun: never = contentType;
        throw new Error(thisShouldNeverRun);
      }
    }
  }

  //? Return the array of JSX elements to be rendered
  return parsedContent;
}

//? Mock function to fetch a post, however it might be
//todo Actually fetch a post
function fetchPost(post: string): CompletePost {
  return {
    title: post,
    content: [[
      contentPieceType.Text,
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, beatae autem consequatur fugiat enim nam, deserunt voluptate eaque, rerum magni at tenetur dolorem? Porro nihil sapiente aut fugiat omnis quia?",
    ], [
      contentPieceType.LargeImage,
      "https://res.cloudinary.com/practicaldev/image/fetch/s--8eb2ZxJZ--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/am7bndcbz2iel9sjw7oc.png",
    ], [
      contentPieceType.Image,
      "https://fresh.deno.dev/logo.svg?__frsh_c=414f858427046bd41a702d524fadc4215ab7180f",
    ], [
      contentPieceType.InlineBlock,
      ["Inline code: ", "`const num = 20`"],
    ], [
      contentPieceType.Text,
      "Block code:",
    ], [
      contentPieceType.CodeBlock,
      "const aaa = null\nconst bbb = undefined",
    ]],
    date: Date.now(),
    author: "TheYuriG",
  };
}
