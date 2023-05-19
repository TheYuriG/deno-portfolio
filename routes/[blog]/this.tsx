//? Create blog content inside Base component
import { Base } from '../../components/Base.tsx';
//? Blog Head with appropriate metadata
import { BlogHead } from '../../heads/BlogHead.tsx';
//? Navigation Buttons to go back to the previous page or to the next article
import BlogNavigationButtons from '../../islands/BlogNavigationButtons.tsx';

export default function Home() {
	return (
		<>
			<BlogHead />
			{/* Base page layout with theme switching and footer outside of accent box */}
			<Base>
				<BlogNavigationButtons />
				<article>
					<h1>
						Hi, sorry about this, I'm using this page to check the responsiveness of my
						layout. :)
					</h1>
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
