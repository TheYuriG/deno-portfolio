//? HTML Head to import CSS and fonts
import { Head } from '$fresh/runtime.ts';
//? Footer with tech stack
import { Footer } from '../components/Footer.tsx';
//? Lateral text with theme switcher
import { Aside } from '../components/Aside.tsx';

export default function Home() {
	return (
		<>
			<Head>
				<title>TheYuriG</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Fragment+Mono&family=Kanit:wght@400;700&display=swap"
					rel="stylesheet"
				></link>
				<link rel="stylesheet" href="file.css" />
			</Head>
			<body>
				{/* Theme switcher */}
				<Aside />
				{/* Main content: name, role, company */}
				<main
					class="absolute top-10 left-10 bottom-10 right-10 p-4"
					style="border: 2px solid var(--accent-color); transition: border 0.7s ease-in-out 0.3s"
				>
					<h1 class="inline-block text-4xl">Hello!</h1>
					<p class="block text-2xl ml-4">
						I am{' '}
						<strong>
							<span class="gradient-underline">TheYuriG</span>
							<span class="wave-emoji">👋</span>
						</strong>
					</p>
					<p class="block text-2xl ml-8">a Node/Deno Full Stack developer.</p>
					<p class="block ml-8">
						Currently working as Backend developer at{' '}
						<a href="https://trophy.place" target="_blank" class="pretty-link">
							Trophy Place
						</a>
						<svg
							viewBox="0 0 4 8"
							xmlns="http://www.w3.org/2000/svg"
							class="inline-block blinking-caret"
						>
							<path d="M 0 0 L 4 0 L 4 1 L 2.5 1 L 2.5 7 L 4 7 L 4 8 L 0 8 L 0 7 L 1.5 7 L 1.5 1 L 0 1 L 0 0"></path>
						</svg>
					</p>
				</main>
				{/* Footer with Tech Stack on bottom right corner */}
				<Footer />
			</body>
		</>
	);
}
