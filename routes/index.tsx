//? Lateral text with theme switcher
import { Base } from '../components/Base.tsx';
//? Lateral text with theme switcher
import { HomeContent } from '../components/HomeContent.tsx';
//? Navigation Menu with redirects to different pages
import { NavigationMenu } from '../components/NavigationMenu.tsx';

export default function Home() {
	return (
		<>
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
