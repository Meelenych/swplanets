'use client';
import ResidentList from '@/app/components/ResidentList';
import React, { useEffect, useState } from 'react';
import usePlanetStore from '@/app/store/planetsStore';
import { Planet } from '@/app/types/types';

const ResidentsPage = ({ params }: { params: { id: string } }) => {
	const { planets, fetchResidents, residents } = usePlanetStore();
	const [currentPlanet, setCurrentPlanet] = useState<Planet | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const loadResidents = async () => {
			const planetName = decodeURIComponent(params.id);
			const foundPlanet = planets.find(planet => planet.name === planetName);
			setCurrentPlanet(foundPlanet || null);

			if (foundPlanet) {
				if (!residents[planetName]) {
					await fetchResidents(planetName);
				}
			}
			setLoading(false);
		};

		loadResidents();
	}, [params.id, planets, fetchResidents, residents]);

	const allResidents = currentPlanet ? residents[currentPlanet.name] || [] : [];

	return (
		<div className='h-lvh flex flex-col items-center'>
			<h2>Residents of {currentPlanet?.name}:</h2>
			{loading ? (
				<p>Loading residents...</p>
			) : allResidents.length > 0 ? (
				<ResidentList
					residents={allResidents}
					planetName={currentPlanet?.name}
				/>
			) : (
				<p>No residents found</p>
			)}
		</div>
	);
};

export default ResidentsPage;
