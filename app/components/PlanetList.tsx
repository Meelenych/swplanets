'use client';
import React, { useEffect, useState } from 'react';
import usePlanetStore from '../store/planetsStore';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

const PlanetList = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const { planets, fetchAllPlanets } = usePlanetStore();

	useEffect(() => {
		fetchAllPlanets().finally(() => setLoading(false));
	}, [fetchAllPlanets]);

	return (
		<div>
			{loading ? (
				<p>Loading planets...</p>
			) : planets.length > 0 ? (
				<ol className='list-decimal grid grid-cols-1 md:grid-cols-3'>
					{planets.map(planet => (
						<li key={uuidv4()}>
							<Link
								className='link-info'
								href={`planets/${planet.name}`}>
								{planet.name}
							</Link>
						</li>
					))}
				</ol>
			) : (
				<p>No planets found</p>
			)}
		</div>
	);
};

export default PlanetList;
