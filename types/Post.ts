//? Possible options of content
export enum contentPieceType {
  Heading = "heading",
  Text = "text",
  Image = "image",
  LargeImage = "largeImage",
  CodeBlock = "codeBlock",
  InlineBlock = "inlineCode",
}

//? How content pieces are created
export type ContentPiece =
  // Simple string types: Text (<p>), CodeBlock <div>, Image and LargeImage (both <img>)
  | [
    (
      | contentPieceType.Heading // Secondary heading
      | contentPieceType.Text // Pure text paragraph
      | contentPieceType.Image // URL string
      | contentPieceType.LargeImage // URL string
      | contentPieceType.CodeBlock // Self contained code block
    ),
    //todo Image and LargeImage should also be an array of strings
    //todo so the first parameter is the link, while the second and
    //todo third are the alt attribute and the title attribute
    string, // All of the types above are simple strings
  ]
  // Array of strings type: InlineBlock (<p><span?></p>)
  | [
    contentPieceType.InlineBlock, // Paragraph with nested code spans
    string[], // Array of strings. A string surrounded by trailing and
    // leading ` will be converted to an inline code block
  ];

//? All the data a post is required to have
export interface CompletePost {
  title: string;
  description: string;
  link: "/how-to-create-theme-switcher-deno-fresh";
  content: ContentPiece[];
  date: number;
  author: string;
}
