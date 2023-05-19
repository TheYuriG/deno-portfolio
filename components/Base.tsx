//? Lateral text with theme switcher
import { Aside } from '../components/Aside.tsx';
//? Footer with tech stack
import { Footer } from '../components/Footer.tsx';
//? Import Preact JSX so we can define the props.children type
import { JSX, toChildArray } from 'preact';

export function Base(props: { children: Array<JSX.Element> | JSX.Element }) {
	return (
		<body>
			{/* Theme switcher */}
			<Aside />
			{/* Main content: name, role, company */}
			<main>{...toChildArray(props.children)}</main>
			{/* Footer with Tech Stack on bottom right corner */}
			<Footer />
		</body>
	);
}
