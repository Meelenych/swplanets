'use client';
import React, { useEffect, useState } from 'react';
import usePlanetStore from '../store/planetsStore';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { Planet } from '../types/types';

const PlanetList = ({ searchTerm }: { searchTerm: string }) => {
	const [loading, setLoading] = useState<boolean>(true);
	const { planets, fetchAllPlanets } = usePlanetStore();
	const [filteredPlanets, setFilteredPlanets] = useState<Planet[]>([]);

	useEffect(() => {
		fetchAllPlanets().finally(() => setLoading(false));
	}, [fetchAllPlanets]);

	useEffect(() => {
		if (searchTerm) {
			setFilteredPlanets(
				planets.filter(planet =>
					planet.name.toLowerCase().includes(searchTerm.toLowerCase()),
				),
			);
		} else {
			setFilteredPlanets(planets);
		}
	}, [searchTerm, planets]);

	return (
		<div className='w-full'>
			{loading ? (
				<p>Loading planets...</p>
			) : filteredPlanets.length > 0 ? (
				<ol className='list-decimal grid grid-cols-1 md:grid-cols-3'>
					{filteredPlanets.map(planet => (
						<li key={uuidv4()}>
							<Link href={`planets/${planet.name}`}>{planet.name}</Link>
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
