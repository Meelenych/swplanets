export default function Home() {
	return (
		<main className=''>
			<h1 className='text-2xl'>Welcome to the Star Wars Planets App</h1>
			<p className='text-sm'>
				This is a simple Next.js application that uses TypeScript, Tailwind CSS, and
				React.js to display a list of Star Wars planets.
			</p>

			<input
				type='text'
				placeholder='Enter planet name'
				className='input input-md rounded-2xl input-bordered input-info w-full max-w-xs'
			/>
		</main>
	);
}
