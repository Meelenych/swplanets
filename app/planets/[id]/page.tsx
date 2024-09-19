'use client';
import React, { useEffect, useState } from 'react';
import PlanetDetail from '../../components/PlanetDetail';
import usePlanetStore from '../../store/planetsStore';
import { Planet } from '../../types/types';

const PlanetDetailPage = ({ params }: { params: { id: string } }) => {
	const { planets } = usePlanetStore();
	const [currentPlanet, setCurrentPlanet] = useState<Planet | null>(null);

	useEffect(() => {
		if (planets.length) {
			const planetId = params.id;
			const foundPlanet = planets.find(planet => planet.name === planetId);
			console.log('foundPlanet', foundPlanet);
			setCurrentPlanet(foundPlanet || null);
		}
	}, [planets, params.id]);

	return (
		<div>
			{currentPlanet ? (
				<PlanetDetail planet={currentPlanet} />
			) : (
				<p>Planet not found</p>
			)}
		</div>
	);
};

export default PlanetDetailPage;
