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
	const [allResidents, setAllResidents] = useState<any[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		if (planets.length) {
			const planetName = decodeURIComponent(params.id);
			console.log('planetName', planetName);
			// Find the planet by name
			const foundPlanet = planets.find(planet => planet.name === planetName);
			console.log('foundPlanet', foundPlanet);
			setCurrentPlanet(foundPlanet || null);
		}
	}, [planets, params.id]);

	useEffect(() => {
		const loadResidents = async () => {
			if (currentPlanet && currentPlanet.residents.length) {
				try {
					const residentsData = await fetchResidents(currentPlanet);
					setAllResidents(residentsData);

					const residentName = decodeURIComponent(params.residentId);
					console.log('residentName', residentName);

					const foundResident = residentsData.find(
						(resident: Resident) => resident.name === residentName,
					);
					console.log('foundResident', foundResident);
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
