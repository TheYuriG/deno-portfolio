//? Import the types so that it doesn't need to be interfaced twice
import BlogPostSummaryProperties from "../types/BlogPostSummaryProperties.ts";

//? Mock array of posts
// todo 1 Read .md files from disk and create this array dynamically
// todo 2 Implement pagination
const createdPosts: Array<BlogPostSummaryProperties> = [{
    link: "/post-1",
    title: "No Code/Low Code Vs. Traditional Development",
    shortSummary:
        "Do you want to know which is better - No Code/Low Code or Traditional Development? Are you looking for the advantages and disadvantages of each? Do you need to know how...",
    date: 1684897287564,
}, {
    link: "/post-2",
    title: "How to delete all your local branches but keep master",
    shortSummary:
        "I find myself searching for this git one-liner a lot, so I figured I'd drop it here to help future searchers...",
    date: 1684983612487,
}, {
    link: "/post-3",
    title: "How to convert an array into an object in javascript",
    shortSummary:
        "To convert an array into an object we will create a function and give it 2 properties, an array and a key...",
    date: 1698375696587,
}, {
    link: "/post-4",
    title: "Ridiculously easy row and column layouts with Flexbox",
    shortSummary:
        "Grid layouts are the bread and butter of web development design and chances are you've reached for something like Bootstrap or Foundation to make your layouts a reality...",
    date: 17016588085775,
}, {
    link: "/post-5",
    title: "Flutter and Firebase Integration",
    shortSummary:
        "Flutter and Firebase, both Google Products make it seamless and powerful if used together. The best part about Firebase is you can use it for all mobile platforms, Android, iOS, and even Fuchsia. You can also use it for Web Development written in any language...",
    date: 1701918068547,
}, {
    link: "/post-6",
    title: "Top 50 CSS Buttons (+ animations)",
    shortSummary:
        "Buttons are not only good for usability, but also an extremely important design element for your website. For this reason, here is a collection of the best CSS...",
    date: 1703127645875,
}];

export default createdPosts