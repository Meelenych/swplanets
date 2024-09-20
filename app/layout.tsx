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
			<body className='flex-grow overflow-y-auto flex flex-col items-center justify-center'>
				<div className='container mx-auto p-4 overflow-y-auto'>
					{!isHomePage && <Header />}
					{children}
				</div>
			</body>
		</html>
	);
}
