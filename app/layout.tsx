'use client';
import { usePathname } from 'next/navigation';
import './styles/globals.css';
import Header from './components/Header';

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const isHomePage = usePathname() === '/';

	return (
		<html lang='en'>
			<head>
				<link
					rel='icon'
					href='/favicon.svg'
					type='image/svg+xml'
				/>
			</head>
			<body className='min-h-screen'>
				<div className='container mx-auto p-4'>
					{!isHomePage && <Header />}
					{children}
				</div>
			</body>
		</html>
	);
}
