'use client';
import Link from 'next/link';
import { Resident } from '../types/types';

const ResidentList = ({
	residents,
	planetName,
}: {
	residents: Resident[];
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
