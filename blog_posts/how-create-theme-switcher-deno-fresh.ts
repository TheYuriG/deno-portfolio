// Unused because Deno Deploy doesn't support dynamically
// importing this file from /services/fetchPosts.ts

// //? Import CompletePost type
// import { CompletePost, contentPieceType } from "../types/Post.ts";

// export const post: CompletePost = {
//     title: "How to Create a Theme Switcher with Fresh",
//     description:
//         "A guide on how to create your own Theme Switcher using Deno and Fresh",
//     link: "/how-create-theme-switcher-deno-fresh",
//     content: [
//         [
//             contentPieceType.LargeImage,
//             "https://web-dev.imgix.net/image/vS06HQ1YTsbMKSFTIPl2iogUQP73/skKcjSv1gMQRYk1AdEp7.png?auto=format&w=1600",
//         ],
//         [
//             contentPieceType.Text,
//             "Being able to customize your Theme is a huge user experience upgrade to any website. While some websites use a default Dark Theme, the majority of the internet still sticks to creating content in Light Mode as default (and sometimes the only option).",
//         ],
//         [
//             contentPieceType.Text,
//             "However, if you have tried to do this on your own before, you might have ran into a problem... or many. In this blog post, I'll explain how I've managed to create my theme, what pitfalls I've faced and how I've circumvented them.",
//         ], // 'heading', 'What is Fresh?'
//         [
//             contentPieceType.Image,
//             "https://fresh.deno.dev/logo.svg?__frsh_c=3171c5e64510907f14fca32f4e0ba9a86bc5247c",
//         ],
//         [
//             contentPieceType.Text,
//             "Let's start from the top: what is Fresh? Fresh is the official framework to create web apps using the Deno javascript runtime. It features no build-time, zero config, typescript support out-of-the-box, JIT-rendering and uses the Island design architecture (more about this in a minute). The premise here is very simple: Single Page Applications rely really heavily on the Client's devices to build the webpages and that will impact your performance. Fresh, just like Remix (and to some extent Next), aims to move all the rendering back to the server and serves exclusively static HTML pages, hydrating any potential Javascript interactivity only when absolutely necessary. While that's amazing for Lighthouse performance, it comes with its own sets of drawbacks.",
//         ],
//         [
//             contentPieceType.Text,
//             "Fresh uses Preact under the hood to compile the JSX/TSX files into static HTML that gets sent to clients. If you have any experience with React, SolidJS or Remix, you shouldn't have any trouble adapting, specially if you have experience building React+NextJS projects.",
//         ],
//         [contentPieceType.Heading, "Creating your first theme"],
//         [contentPieceType.Text, "Let's create a very simple Theme Switcher:"],
//         [
//             contentPieceType.CodeBlock,
//             `// /islands/ThemeSwitcher.tsx
// import { useState, useEffect } from 'preact/hooks';
// export default function ThemeSwitcher() {
//     const [theme, setTheme] = useState('Dark');

//     useEffect(() => {
// 		const cssRoot: HTMLElement | null = document.querySelector(':root');
// 		if (cssRoot !== null) {
// 			if (theme === 'Light') {
// 				cssRoot.style.setProperty('--base-color', 'rgb(203 213 225)');
// 				cssRoot.style.setProperty('--neutral-color', 'rgb(15 23 42)');
// 				cssRoot.style.setProperty('--accent-color', 'rgb(220 38 38)');
// 			} else {
// 				cssRoot.style.setProperty('--base-color', 'rgb(15 23 42)');
// 				cssRoot.style.setProperty('--neutral-color', 'rgb(203 213 225)');
// 				cssRoot.style.setProperty('--accent-color', 'rgb(126 34 206)');
// 			}
// 		}
// 	}, [theme]);

//     const themes: string[] = ['Dark', 'Light'];

//     return (
// 		<>
// 			{themes.map((themeOption) => (
// 				<label for={themeOption}>
// 					<input
// 						class="mr-1"
// 						type="radio"
// 						id={themeOption}
// 						name="theme"
// 						checked={theme == themeOption}
// 						onClick={() => {
// 							setTheme(themeOption);
// 						}}
// 					></input>
// 					{themeOption}
// 				</label>
// 			))}
// 		</>
// 	);
// }`,
//         ],
//         [contentPieceType.InlineBlock, [
//             "This creates a radio input that has ",
//             "`Dark`",
//             " selected by default and allows you to toggle between modes. Switching themes will toggle between the Light and the Dark versions of the theme for this blog, now let's make sure we can save the changes when the user clicks either input. Feel free to replace the values of ",
//             "`--base-color`",
//             ", ",
//             "`--neutral-color`",
//             ", and ",
//             "`--accent-color`",
//             " with the values for your own theme.",
//         ]],
//         [
//             contentPieceType.CodeBlock,
//             `import { useEffect, useRef, useState } from "preact/hooks";
// ...
// const isInitialMount = useRef(true);

// useEffect(() => {
//     const savedTheme = localStorage.getItem("theme")

//     if (isInitialMount.current === true) {
//         if (savedTheme !== null && savedTheme !== theme){
//             setTheme(() => savedTheme)
//             return
//         }

//       isInitialMount.current = false;
//       return;
//     }
//     localStorage.setItem("theme", theme);
// ...`,
//         ],
//         [contentPieceType.InlineBlock, [
//             "What the ",
//             "`useEffect()`",
//             " does, in order:",
//         ]],
//         [contentPieceType.InlineBlock, [
//             "1- Runs on start, checks if there is a theme saved (if not, ",
//             "`savedTheme`",
//             " will be ",
//             "`null`",
//             ") and sets the current theme as the ",
//             "`savedTheme`",
//             ", if they are different, then stops (remember that ",
//             "`useEffect()`",
//             " is using the ",
//             "`theme`",
//             " as dependency so not returning here would cause an infinite loop!).",
//         ]],
//         [contentPieceType.InlineBlock, [
//             "2- After setting the ",
//             "`theme`",
//             " equal to localStorage's ",
//             "`savedTheme`",
//             ", ",
//             "`useEffect()`",
//             " is triggered again. Because the ",
//             "`savedTheme`",
//             " is the same as ",
//             "`theme`",
//             ", it will skip the first ",
//             "`if`",
//             " check and negate the ",
//             "`isInitialMount`",
//             " value and stop.",
//         ]],
//         [contentPieceType.InlineBlock, [
//             "3- (Optional) If the theme is switched, it will skip both ",
//             "`if`",
//             " checks, save the theme to ",
//             "`localStorage`",
//             " and apply the theme.",
//         ]],
//         [
//             contentPieceType.Text,
//             "So there you have it, a theme switcher build with Preact and Fresh. But can we make this better?",
//         ],
//     ],
//     date: 1684849328672,
//     author: "Written with 💞 by TheYuriG",
// };
