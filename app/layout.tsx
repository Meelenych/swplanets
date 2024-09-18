import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';

export const metadata: Metadata = {
	title: 'Star Wars Planets',
	description: 'Explore Star Wars Universe planets',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<link
					rel='icon'
					href='/favicon.svg'
					type='image/svg+xml'
				/>
			</head>
			<body className=''>
				<div className='container mx-auto px-4'>
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
