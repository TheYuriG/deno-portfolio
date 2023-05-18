//? Lateral text with theme switcher
import { Base } from '../components/Base.tsx';
import { BlogHead } from '../heads/BlogHead.tsx';

export default function Home() {
	return (
		<>
			<BlogHead />
			{/* Base page layout with theme switching and footer outside of accent box */}
			<Base>
				<article class="flex flex-col items-center lg:w-[900px] lg:mx-auto">
					<h1 class="navigation-link">This</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos unde
						sapiente, dolor ducimus distinctio architecto alias, eaque at repellendus
						modi totam quas sint exercitationem. Culpa ipsam esse eum distinctio odio.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos unde
						sapiente, dolor ducimus distinctio architecto alias, eaque at repellendus
						modi totam quas sint exercitationem. Culpa ipsam esse eum distinctio odio.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos unde
						sapiente, dolor ducimus distinctio architecto alias, eaque at repellendus
						modi totam quas sint exercitationem. Culpa ipsam esse eum distinctio odio.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos unde
						sapiente, dolor ducimus distinctio architecto alias, eaque at repellendus
						modi totam quas sint exercitationem. Culpa ipsam esse eum distinctio odio.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos unde
						sapiente, dolor ducimus distinctio architecto alias, eaque at repellendus
						modi totam quas sint exercitationem. Culpa ipsam esse eum distinctio odio.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos unde
						sapiente, dolor ducimus distinctio architecto alias, eaque at repellendus
						modi totam quas sint exercitationem. Culpa ipsam esse eum distinctio odio.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos unde
						sapiente, dolor ducimus distinctio architecto alias, eaque at repellendus
						modi totam quas sint exercitationem. Culpa ipsam esse eum distinctio odio.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos unde
						sapiente, dolor ducimus distinctio architecto alias, eaque at repellendus
						modi totam quas sint exercitationem. Culpa ipsam esse eum distinctio odio.
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos unde
						sapiente, dolor ducimus distinctio architecto alias, eaque at repellendus
						modi totam quas sint exercitationem. Culpa ipsam esse eum distinctio odio.
					</p>
				</article>
			</Base>
		</>
	);
}
