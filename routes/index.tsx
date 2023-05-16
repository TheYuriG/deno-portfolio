import { Head } from '$fresh/runtime.ts';
import { Footer } from '../components/Footer.tsx';

export default function Home() {
	return (
		<>
			<Head>
				<title>TheYuriG</title>
				<link
					href="https://fonts.googleapis.com/css2?family=Fragment+Mono&family=Kanit:wght@400;700&display=swap"
					rel="stylesheet"
				></link>
				<link rel="stylesheet" href="file.css" />
			</Head>
			<body>
				<div class="absolute flex flex-row -left-14 bottom-24 text-xl -rotate-90 ml-2 mb-2 space-x-2">
					<label for="dark">
						<input class="mr-1" type="radio" id="dark" name="theme" checked></input>
						Dark
					</label>
					<label for="light">
						<input class="mr-1" type="radio" id="light" name="theme"></input>
						Light
					</label>
				</div>
				<main class="absolute top-10 left-10 bottom-10 right-10 p-4 border-grey border-2">
					<h1 class="inline-block text-4xl">Hello!</h1>
					<p class="block text-2xl ml-4">
						I am{' '}
						<strong>
							<span class="underline">TheYuriG</span>
						</strong>
						,
					</p>
					<p class="block text-2xl ml-8">a Node/Deno Full Stack developer.</p>
					<p class="block ml-12">I'm responsible for the backend of Trophy Place.</p>
				</main>
				<Footer></Footer>
			</body>
		</>
	);
}
