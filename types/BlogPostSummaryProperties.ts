//? Define what obligatory data a post must have
interface BlogPostSummaryProperties {
    //? A post summary must link to the entire post. The link is built from the file name
    link: string;
    //? Title of the full post
    title: string;
    //? Brief summary of the full post, overflow=ellipsis
    shortSummary: string;
    //? Date of when the post was created
    date: number;
}

//? Export these summary details so they can be used in 
//? components/BlogPost.tsx and routes/blog.tsx
export default BlogPostSummaryProperties