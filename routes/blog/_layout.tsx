import { define } from "../../utils.ts";
//? Automatic conversion of timestamps to local time for the blog posts
import ConvertTimestampsToLocalTime from "@/data/blog/ConvertTimestampsToLocalTime.tsx";
//? Footer for blog posts, not on the main blog page
import { BlogPostFooter } from "@/components/blog/BlogPostFooter.tsx";

export default define.layout(({ Component, url }) => {
    const displayBlogFooterIfWithinPost = url.pathname !== "/blog" ? <BlogPostFooter /> : null

    return (
        <>
            <Component />
            <ConvertTimestampsToLocalTime />
            {displayBlogFooterIfWithinPost}
        </>
    );
});