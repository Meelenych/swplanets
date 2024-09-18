import Link from 'next/link';
import Image from 'next/image';
import Falcon from '../public/assets/icons/Falcon.svg';

export default function Home() {
	return (
		<main className='flex flex-grow h-dvh flex-col items-center justify-start'>
			<h1 className='text-2xl mt-32'>Welcome to the Star Wars Planets App</h1>
			<p className='text-sm mt-4'>
				This is a simple Next.js application that uses TypeScript, Tailwind CSS, and
				React.js to display a list of Star Wars planets.
			</p>
			<Link
				className='btn btn-wide mt-28'
				href='/planets'>
				Explore planets{' '}
				<Image
					src={Falcon}
					alt={'spaceship'}
					width={30}
					height={30}
					unoptimized
				/>
			</Link>
		</main>
	);
}
