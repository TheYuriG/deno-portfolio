//? Import Post types
import {
    type CompletePost, // Post interface
    contentPieceType, // Post section enum types
} from "../types/Post.ts";

//? Mock function to fetch a post, however it might be
//todo Actually fetch a post
export default function fetchPost(post: string): CompletePost {
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