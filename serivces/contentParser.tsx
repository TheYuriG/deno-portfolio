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

export default contentParser;
