//? Create blog content inside Base component
import { Base } from '../../components/Base.tsx';
//? Blog Head with appropriate metadata
import { BlogHead } from '../../heads/BlogHead.tsx';
//? Navigation Buttons to go back to the previous page or to the next article
import BlogNavigationButtons from '../../islands/BlogNavigationButtons.tsx';
//? Infinitely expandable insanity section
import InsanitySection from '../../islands/InsanitySection.tsx';

export default function Home() {
	return (
		<>
			<BlogHead />
			{/* Base page layout with theme switching and footer outside of accent box */}
			<Base>
				<BlogNavigationButtons />
				<article>
					{/* Static Insanity Heading */}
					<h1>Did I ever tell you what the definition of insanity is?</h1>
					{/* Infinitely expandable Insanity text section */}
					<InsanitySection />
					{/* Spacer to push the post footer text to the bottom */}
					<div class="spacer"></div>
					{/* Small notice about this page */}
					<footer class="blog-footer">
						This page exists to text the responsiveness of the layout whenever changes
						happens.
					</footer>
				</article>
			</Base>
		</>
	);
}
