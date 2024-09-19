'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
	const path = usePathname();
	const pathSegments = path.split('/').filter(Boolean);
	const breadcrumbs = pathSegments.map((segment, index) => {
		const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
		return { name: segment.charAt(0).toUpperCase() + segment.slice(1), href };
	});
	breadcrumbs.unshift({ name: 'Home', href: '/' });

	return (
		<header>
			<div className='container flex justify-center'>
				<div className='breadcrumbs text-sm'>
					<ul>
						{breadcrumbs.map((breadcrumb, index) => (
							<li key={breadcrumb.href}>
								<Link href={breadcrumb.href}>{breadcrumb.name}</Link>
								{index < breadcrumbs.length - 1}
							</li>
						))}
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
