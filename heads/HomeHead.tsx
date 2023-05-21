//? HTML Head to import CSS and fonts
import { Head } from '$fresh/runtime.ts';

export function HomeHead() {
	return (
		<>
			<Head>
				<title>TheYuriG - Node/Deno Developer</title>
				<meta property="og:title" content="TheYuriG" />
				<meta property="og:site_name" content="TheYuriG's Website" />
				<meta
					property="og:description"
					content="Portfolio to showcase Yuri's experience with tech, his thoughts and projects created."
				/>
				<meta property="og:type" content="blog" />
				{/* Image tag, if I ever put one <meta
					property="og:image"
					content="https://rockcontent.com/br/wp-content/uploads/sites/2/2014/09/zuckerberg-620×316.png"
				/> */}
				<meta property="og:url" content="https://www.theyurig.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Fragment+Mono&family=Kanit:wght@400;700&display=swap"
					rel="stylesheet"
				></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap"
					rel="stylesheet"
				></link>
				<link rel="stylesheet" href="base.css" />
				<link rel="stylesheet" href="home.css" />
				<link rel="stylesheet" href="/gradient-underline.css" />
			</Head>
		</>
	);
}
