'use client';
import React, { useEffect, useState } from 'react';
import usePlanetStore from '../../../../store/planetsStore';
import { Planet, Resident } from '../../../../types/types';
import ResidentDetail from '../../../../components/ResidentDetail';
import { fetchResidents } from '../../../../../services/residentsApi';

const ResidentDetailPage = ({
	params,
}: {
	params: { id: string; residentId: string };
}) => {
	const { planets } = usePlanetStore();
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
		const loadResidents = async () => {
			if (currentPlanet && currentPlanet.residents.length) {
				try {
					const residentsData = await fetchResidents(currentPlanet);
					const residentName = decodeURIComponent(params.residentId);
					const foundResident = residentsData.find(
						(resident: Resident) => resident.name === residentName,
					);
					setCurrentResident(foundResident || null);
				} catch (error) {
					console.error('Error fetching residents:', error);
				}
				setLoading(false);
			} else {
				setLoading(false);
			}
		};
		if (currentPlanet) {
			loadResidents();
		}
	}, [currentPlanet, params.residentId]);

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
