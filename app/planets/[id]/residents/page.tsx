'use client';
import ResidentList from '@/app/components/ResidentList';
import React, { useEffect, useState } from 'react';
import { fetchResidents } from '../../../../services/residentsApi';
import usePlanetStore from '@/app/store/planetsStore';
import { Planet } from '@/app/types/types';

const ResidentsPage = ({ params }: { params: { id: string } }) => {
	const { planets } = usePlanetStore();
	const [currentPlanet, setCurrentPlanet] = useState<Planet | null>(null);
	const [allResidents, setAllResidents] = useState<any[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const loadResidents = async () => {
			const planetName = decodeURIComponent(params.id);
			const foundPlanet = planets.find(planet => planet.name === planetName);
			setCurrentPlanet(foundPlanet || null);

			if (foundPlanet && foundPlanet.residents.length) {
				try {
					const residentsData = await fetchResidents(foundPlanet);
					setAllResidents(residentsData);
				} catch (error) {
					console.error('Error fetching residents:', error);
				}
			}
			setLoading(false); // Always set loading to false after the attempt
		};

		loadResidents();
	}, [params.id, planets]);

	return (
		<div>
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
