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
					<h1>Did I ever tell you what the definition of insanity is?</h1>
					<button>Dial ⤴️ the Insanity 🤪</button>
					<p>
						Insanity is doing the exact... same fucking thing... 🔁 over and 🔁 over
						again expecting... shit to change... ⏭️{' '}
						<em>
							That. Is. <strong>Crazy.</strong>
						</em>{' '}
						🤪
					</p>
					<p>
						The first time somebody told me that, I dunno, I thought they were
						bullshitting me, so 💥, I shot him 🔫. The thing is... He was right 🤔. And
						then I started seeing, everywhere I looked 🔎, everywhere I looked all these
						fucking pricks, everywhere I looked, doing the exact same fucking thing...
						🔁 over and 🔁 over and 🔁 over and 🔁 over again thinking 'this time is
						gonna be different' no, no, no please... This time is gonna be different,
						I'm sorry 🙏, I don't like... The way... you are looking at me... 🧐
					</p>
					<p>
						Okay, Do you have a fucking problem in your head 🤕, do you think I am
						bullshitting you, do you think I am lying 🤥? Fuck you! Okay? Fuck you! 😡
					</p>
					<p>
						It's okay, man. I'm gonna chill, hermano. I'm gonna chill 🥶... The thing
						is... Alright, the thing is I killed you once already 🪦... and it's not
						like I am fucking crazy 🤪. It's okay... It's like water under the bridge
						🌉. Did I ever tell you the definition... of insanity?
					</p>
					<div class="spacer"></div>
					<footer class="blog-footer">
						This page exists to text the responsiveness of the layout whenever changes
						happens.
					</footer>
				</article>
			</Base>
		</>
	);
}
