//? Create blog content inside Base component
import { Base } from '../../components/Base.tsx';
//? Import CustomHead with appropriate metadata
import { CustomHead } from '../../components/CustomHead.tsx';
//? Navigation Buttons to go back to the previous page or to the next article
import BlogNavigationButtons from '../../islands/BlogNavigationButtons.tsx';

export default function Home() {
	return (
		<>
			<CustomHead
				title="Spinners"
				description="Playing with CSS translate3d!"
				link="https://www.theyurig.com/toys/spinners"
			>
				<link rel="stylesheet" href="/content.css" />
				<link rel="stylesheet" href="/navigation-buttons.css" />
				<link rel="stylesheet" href="/spinners.css" />
			</CustomHead>
			{/* Base page layout with theme switching and footer outside of accent box */}
			<Base>
				<BlogNavigationButtons />
				<article>
					<h1>Spinners</h1>
					<p style="margin-bottom: 2em;">
						Experimenting with translate3d (hover for information!)
					</p>
					<section style="flex: 1;">
						<div id="spacer-top" style="flex: 1;"></div>
						<div id="cubes-container">
							{/* Text Cube */}
							<div
								id="named-cube"
								class="cube"
								style="width: 4em; height: 8em;"
								title="green+C=close; red+F=far; T=top; B=bottom; L=left; R=right"
							>
								<div style="transform: translate3d(-1em, 0em, 2em)">
									<div class="anti-spinner close">TL</div>
								</div>
								<div style="transform: translate3d(3em, 0em, 2em)">
									<div class="anti-spinner close">TR</div>
								</div>
								<div style="transform: translate3d(-1em, 4em, 2em)">
									<div class="anti-spinner close">BL</div>
								</div>
								<div style="transform: translate3d(3em, 4em, 2em)">
									<div class="anti-spinner close">BR</div>
								</div>
								<div style="transform: translate3d(-1em, 0em, -2em)">
									<div class="anti-spinner far">TL</div>
								</div>
								<div style="transform: translate3d(3em, 0em, -2em)">
									<div class="anti-spinner far">TR</div>
								</div>
								<div style="transform: translate3d(-1em, 4em, -2em)">
									<div class="anti-spinner far">BL</div>
								</div>
								<div style="transform: translate3d(3em, 4em, -2em)">
									<div class="anti-spinner far">BR</div>
								</div>
							</div>
							{/* Flower Cube */}
							<div
								id="flower-cube"
								class="cube"
								style="width: 4em; height: 8em;"
								title="🌸=close+top; 🌻=close+bottom; 🌺=far+top; 🌹=far+bottom;"
							>
								<div style="transform: translate3d(0em, 1.3em, 2em)">
									<div class="anti-turner">🌸</div>
								</div>
								<div style="transform: translate3d(4em, 1.3em, 2em)">
									<div class="anti-turner">🌸</div>
								</div>
								<div style="transform: translate3d(0em, 5.3em, 2em)">
									<div class="anti-turner">🌻</div>
								</div>
								<div style="transform: translate3d(4em, 5.3em, 2em)">
									<div class="anti-turner">🌻</div>
								</div>
								<div style="transform: translate3d(0em, 1.3em, -2em)">
									<div class="anti-turner">🌺</div>
								</div>
								<div style="transform: translate3d(4em, 1.3em, -2em)">
									<div class="anti-turner">🌺</div>
								</div>
								<div style="transform: translate3d(0em, 5.3em, -2em)">
									<div class="anti-turner">🌹</div>
								</div>
								<div style="transform: translate3d(4em, 5.3em, -2em)">
									<div class="anti-turner">🌹</div>
								</div>
							</div>
							{/* Party Cube */}
							<div
								id="party-cube"
								class="cube"
								style="width: 4em; height: 8em;"
								title="🥳=top; 🎈=bottom;"
							>
								<div style="transform: translate3d(-0.5em, 1.5em, 2em)">
									<div class="anti-flipper">🥳</div>
								</div>
								<div style="transform: translate3d(3.5em, 1.5em, 2em)">
									<div class="anti-flipper">🥳</div>
								</div>
								<div style="transform: translate3d(-0.5em, 5.5em, 2em)">
									<div class="anti-flipper">🎈</div>
								</div>
								<div style="transform: translate3d(3.5em, 5.5em, 2em)">
									<div class="anti-flipper">🎈</div>
								</div>
								<div style="transform: translate3d(-0.5em, 1.5em, -2em)">
									<div class="anti-flipper">🥳</div>
								</div>
								<div style="transform: translate3d(3.5em, 1.5em, -2em)">
									<div class="anti-flipper">🥳</div>
								</div>
								<div style="transform: translate3d(-0.5em, 5.5em, -2em)">
									<div class="anti-flipper">🎈</div>
								</div>
								<div style="transform: translate3d(3.5em, 5.5em, -2em)">
									<div class="anti-flipper">🎈</div>
								</div>
							</div>
						</div>
						<div id="spacer-top" style="flex: 1;"></div>
					</section>
					<footer class="blog-footer" style="margin-top: 1em;">
						this experimentation helped me learn{' '}
						<a
							href="https://codepen.io/TheYuriG/pen/yLRQqmr?editors=1100"
							target="_blank"
							rel="noopener noreferrer"
						>
							<strong>this</strong>
						</a>
						. inspiration{' '}
						<a
							href="https://x.st/spinning-diagrams-with-css/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<strong>here</strong>.
						</a>
					</footer>
				</article>
			</Base>
		</>
	);
}
