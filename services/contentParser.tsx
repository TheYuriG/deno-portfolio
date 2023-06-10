// //? To define types as JSX.Element
// import { JSX } from "preact";
// //? Import Post types
// import {
//   type ContentPiece, // Post section content
//   contentPieceType, // Post section enum types
// } from "../types/Post.ts";

// //? Regex for inline code blocks
// const inlineCodeSpanCreatorRegex = new RegExp(/^`.*`$/);

// //? Parses content to be used as Post Content
// function contentParser(content: ContentPiece[]): JSX.Element[] {
//   //? Initializes the Array that will hold all the JSX elements to be rendered
//   const parsedContent: JSX.Element[] = [];

//   //? Loop through all the content, push appropriate elements to parsedContent[]
//   for (let pieceIndex = 0; pieceIndex < content.length; pieceIndex++) {
//     //? Destructure the content for legibility
//     const [contentType, contentValue] = content[pieceIndex];

//     //? Use a switch-case to process the blog content for better performance
//     switch (contentType) {
//       //? Create a medium sized heading
//       case contentPieceType.Heading:
//         parsedContent.push(<h2 class="subtopic">{contentValue}</h2>);
//         break;
//       //? Bland paragraph with no additional information
//       case contentPieceType.Text:
//         parsedContent.push(<p class="my-2">{contentValue}</p>);
//         break;
//       //? Small image that doesn't fill the entire content width
//       case contentPieceType.Image:
//         parsedContent.push(
//           <img
//             src={contentValue}
//             class="my-4 mx-auto h-40 w-40"
//           />,
//         );
//         break;
//       //? Large image that fills the entire content width
//       case contentPieceType.LargeImage:
//         parsedContent.push(
//           <img src={contentValue} class="my-4 object-cover" />,
//         );
//         break;
//       //? Paragraph with nested inline-code blocks
//       case contentPieceType.InlineBlock: {
//         const inlineCodeBlockContent: JSX.Element[] = [];
//         //? Loop through every array item to create the nested inline-code
//         //? blocks inside the overall paragraph
//         for (
//           let subContentIndex = 0;
//           subContentIndex < contentValue.length;
//           subContentIndex++
//         ) {
//           if (inlineCodeSpanCreatorRegex.test(contentValue[subContentIndex])) {
//             inlineCodeBlockContent.push(
//               <code class="shj-lang-js">
//                 {contentValue[subContentIndex].replace(/^`|`$/g, "")}
//               </code>,
//             );
//           } else {
//             inlineCodeBlockContent.push(<>{contentValue[subContentIndex]}</>);
//           }
//         }
//         parsedContent.push(
//           <p>
//             {inlineCodeBlockContent}
//           </p>,
//         );
//         break;
//       }
//       //? Large and independent code blocks
//       case contentPieceType.CodeBlock:
//         parsedContent.push(
//           <div class="shj-lang-js">
//             {contentValue}
//           </div>,
//         );
//         break;
//       //? Guard clause to avoid adding new types that aren't being rendered
//       default: {
//         const thisShouldNeverRun: never = contentType;
//         throw new Error(thisShouldNeverRun);
//       }
//     }
//   }

//   //? Return the array of JSX elements to be rendered
//   return parsedContent;
// }

// export default contentParser;
