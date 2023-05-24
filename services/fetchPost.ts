// Unused because Deno Deploy doesn't support dynamic imports

// //? Import CompletePost type
// import {
//   type CompletePost, // Post interface
// } from "../types/Post.ts";
// //? Import fetch error
// import FetchPostError from "../types/FetchPostError.ts";

// //? Fetches post by filename, from /blog_posts
// //! Route needs to match filename!
// export default async function fetchPost(
//   postLink: string,
// ): Promise<FetchPostError | CompletePost> {
//   try {
//     const { post }: { post: CompletePost } = await import(
//       `../blog_posts/${postLink}.ts`
//     );
//     return post;
//   } catch (error) {
//     return new FetchPostError(
//       "Unable to find the specified Post!",
//       error.trace,
//     );
//   }
// }
