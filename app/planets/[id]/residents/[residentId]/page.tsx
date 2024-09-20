'use client';
import React, { useEffect, useState } from 'react';
import usePlanetStore from '../../../../store/planetsStore';
import { Planet, Resident } from '../../../../types/types';
import ResidentDetail from '../../../../components/ResidentDetail';

const ResidentDetailPage = ({
	params,
}: {
	params: { id: string; residentId: string };
}) => {
	const { planets, residents } = usePlanetStore();
	const [currentPlanet, setCurrentPlanet] = useState<Planet | null>(null);
	const [currentResident, setCurrentResident] = useState<Resident | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		if (planets.length) {
			const planetName = decodeURIComponent(params.id);
			const foundPlanet = planets.find(planet => planet.name === planetName);
			setCurrentPlanet(foundPlanet || null);
		}
	}, [planets, params.id]);

	useEffect(() => {
		if (currentPlanet) {
			const residentName = decodeURIComponent(params.residentId);
			const allResidents = residents[currentPlanet.name] || [];
			const foundResident = allResidents.find(
				(resident: Resident) => resident.name === residentName,
			);
			setCurrentResident(foundResident || null);
			setLoading(false);
		} else {
			setLoading(false);
		}
	}, [currentPlanet, params.residentId, residents]);

	return (
		<div>
			{loading ? (
				<p>Loading resident...</p>
			) : currentResident ? (
				<ResidentDetail resident={currentResident} />
			) : (
				<p>Resident not found</p>
			)}
		</div>
	);
};

export default ResidentDetailPage;
