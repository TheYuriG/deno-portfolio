//? HTML Head to import CSS and fonts
import { Head } from '$fresh/runtime.ts';

export function BlogHead() {
	return (
		<>
			<Head>
				<title>TheYuriG - Blog</title>
				<meta property="og:title" content="TheYuriG" />
				<meta property="og:site_name" content="TheYuriG's Blog" />
				<meta property="og:description" content="Blog portion of TheYuriG's website." />
				<meta property="og:type" content="blog" />
				{/* Image tag, if I ever put one <meta
					property="og:image"
					content="https://rockcontent.com/br/wp-content/uploads/sites/2/2014/09/zuckerberg-620×316.png"
				/> */}
				<meta property="og:url" content="https://www.theyurig.com/blog" />
				<link
					href="https://fonts.googleapis.com/css2?family=Fragment+Mono&family=Kanit:wght@400;700&display=swap"
					rel="stylesheet"
				></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap"
					rel="stylesheet"
				></link>
				<link rel="stylesheet" href="/base.css" />
				<link rel="stylesheet" href="/blog.css" />
				<link rel="stylesheet" href="/styled-button.css" />
				<link rel="stylesheet" href="/navigation-buttons.css" />
			</Head>
		</>
	);
}
