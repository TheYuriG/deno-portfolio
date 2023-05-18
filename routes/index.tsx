//? Lateral text with theme switcher
import { Base } from '../components/Base.tsx';
//? Lateral text with theme switcher
import { HomeContent } from '../components/HomeContent.tsx';
//? Head component with all Meta tags pre-set
import { HomeHead } from '../heads/HomeHead.tsx';
//? Navigation Menu with redirects to different pages
import { NavigationMenu } from '../components/NavigationMenu.tsx';

export default function Home() {
	return (
		<>
			<HomeHead />
			{/* Base page layout with theme switching and footer outside of accent box */}
			<Base>
				{/* Content with greeting, name, workplace */}
				<HomeContent />
				{/* Navigation menu to other routes */}
				<NavigationMenu />
			</Base>
		</>
	);
}
