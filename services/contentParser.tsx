//? To define types as JSX.Element
import { JSX } from "preact";
//? Import Post types
import {
  type ContentPiece, // Post section content
  contentPieceType, // Post section enum types
} from "../types/Post.ts";

//? Regex for inline code blocks
const inlineCodeSpanCreatorRegex = new RegExp(/^`.*`$/);

//? Parses content to be used as Post Content
function contentParser(content: ContentPiece[]): JSX.Element[] {
  //? Initializes the Array that will hold all the JSX elements to be rendered
  const parsedContent: JSX.Element[] = [];

  //? Loop through all the content, push appropriate elements to parsedContent[]
  for (let pieceIndex = 0; pieceIndex < content.length; pieceIndex++) {
    //? Destructure the content for legibility
    const [contentType, contentValue] = content[pieceIndex];

    //? Use a switch-case to process the blog content for better performance
    switch (contentType) {
      case contentPieceType.Text:
        parsedContent.push(<p class="space">{contentValue}</p>);
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
