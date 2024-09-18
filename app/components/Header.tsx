import Link from 'next/link';

const Header = () => {
	return (
		<header>
			<div className='container'>
				<div className='breadcrumbs text-sm'>
					<ul>
						<li>
							<Link href=''>Planets</Link>
						</li>
						<li>
							<Link href=''>Planet</Link>
						</li>
						<li>
							<Link href=''>Residents</Link>
						</li>
						<li>
							<Link href=''>Resident</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
