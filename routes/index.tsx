//? HTML Head to import CSS and fonts
import { Head } from '$fresh/runtime.ts';
//? Lateral text with theme switcher
import { Aside } from '../components/Aside.tsx';
//? Lateral text with theme switcher
import { HomeContent } from '../components/HomeContent.tsx';
//? Footer with tech stack
import { Footer } from '../components/Footer.tsx';

export default function Home() {
	return (
		<>
			<Head>
				<title>TheYuriG</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Fragment+Mono&family=Kanit:wght@400;700&display=swap"
					rel="stylesheet"
				></link>
				<link rel="stylesheet" href="home.css" />
			</Head>
			<body>
				{/* Theme switcher */}
				<Aside />
				{/* Main content: name, role, company */}
				<main
					class="absolute top-10 left-10 bottom-10 right-10 p-4"
					style="border: 2px solid var(--accent-color); transition: border 0.7s ease-in-out 0.3s"
				>
					<HomeContent />
				</main>
				{/* Footer with Tech Stack on bottom right corner */}
				<Footer />
			</body>
		</>
	);
}
