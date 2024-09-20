'use client';
import Link from 'next/link';

const ResidentList = ({
	residents,
	planetName,
}: {
	residents: any[];
	planetName: string | undefined;
}) => {
	return (
		<div>
			<ul>
				{residents.map(resident => (
					<li key={resident.name}>
						<Link href={`/planets/${planetName}/residents/${resident.name}`}>
							{resident.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ResidentList;
