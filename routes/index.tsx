import { Head } from '$fresh/runtime.ts';

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
					<h1 class="inline-block text-4xl">Welcome!</h1>
					<p class="text-2xl">example normal</p>
					<p class="font-bold text-2xl">example bold</p>
				</main>
			</body>
		</>
	);
}
