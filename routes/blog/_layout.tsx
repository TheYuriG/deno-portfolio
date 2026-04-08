import { define } from "../../utils.ts";
//? Automatic conversion of timestamps to local time for the blog posts
import ConvertTimestampsToLocalTime from "@/data/blog/ConvertTimestampsToLocalTime.tsx";

export default define.layout(({ Component }) => {
    return (
        <>
            <Component />
            <ConvertTimestampsToLocalTime />
        </>
    );
});