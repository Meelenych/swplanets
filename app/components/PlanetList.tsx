'use client';
import React, { useEffect } from 'react';
import usePlanetStore from '../store/planetsStore';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';

const PlanetList = () => {
	const { planets, fetchPlanets } = usePlanetStore();

	useEffect(() => {
		fetchPlanets();
	}, [fetchPlanets]);

	return (
		<div>
			<ol className='list-decimal'>
				{planets?.map(planet => (
					<li key={uuidv4()}>
						<Link
							className='link-info'
							href={`planets/${planet.name}`}>
							{planet.name}
						</Link>
					</li>
				))}
			</ol>
		</div>
	);
};

export default PlanetList;
