//? Head component with all Meta tags pre-set
import { MetaHead } from '../components/MetaHead.tsx';
//? Lateral text with theme switcher
import { Aside } from '../components/Aside.tsx';
//? Lateral text with theme switcher
import { HomeContent } from '../components/HomeContent.tsx';
//? Footer with tech stack
import { Footer } from '../components/Footer.tsx';
//? Navigation Menu with redirects to different pages
import { NavigationMenu } from '../components/NavigationMenu.tsx';

export default function Home() {
	return (
		<>
			<body>
				<MetaHead />
				{/* Theme switcher */}
				<Aside />
				{/* Main content: name, role, company */}
				<main
					class="absolute top-10 left-10 bottom-10 right-10 p-4"
					style="border: 2px solid var(--accent-color); transition: border 0.7s ease-in-out 0.3s"
				>
					{/* Content with greeting, name, workplace */}
					<HomeContent />
					{/* Navigation menu to other routes */}
					<NavigationMenu />
				</main>
				{/* Footer with Tech Stack on bottom right corner */}
				<Footer />
			</body>
		</>
	);
}
