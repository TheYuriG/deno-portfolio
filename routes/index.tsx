//? Lateral text with theme switcher
import { Base } from '../components/Base.tsx';
//? Content displayed on the Home page, including header and navigation menu
import { HomeContent } from '../components/HomeContent.tsx';
//? Head component with all Meta tags pre-set
import { CustomHead } from '../components/CustomHead.tsx';
//? Navigation Menu with redirects to different pages
import { NavigationMenu } from '../components/NavigationMenu.tsx';

export default function Home() {
	return (
		<>
			<CustomHead
				title="TheYuriG - Node/Deno Developer"
				description="Showcasing Yuri's experience, thoughts and projects created."
				link="https://www.theyurig.com/"
			>
				<link rel="stylesheet" href="home.css" />
				<link rel="stylesheet" href="/gradient-underline.css" />
			</CustomHead>
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
