import React, { useEffect, useState } from 'react';
import { Planet } from '../types/types';
import { fetchResidents } from '../../services/residentsApi';

const PlanetDetail = ({ planet }: { planet: Planet }) => {
	const [allResidents, setAllResidents] = useState<any[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const loadResidents = async () => {
			if (planet.residents.length) {
				try {
					const residentsData = await fetchResidents(planet);
					setAllResidents(residentsData);
				} catch (error) {
					console.error('Error fetching residents:', error);
				}
				setLoading(false);
			} else {
				setLoading(false);
			}
		};

		loadResidents();
	}, [planet]);

	return (
		<>
			<ul>
				<li>Planet name: {planet.name}</li>
				<li>Rotation period: {planet.rotation_period}</li>
				<li>Orbital period: {planet.orbital_period}</li>
				<li>Diameter: {planet.diameter}</li>
				<li>Climate: {planet.climate}</li>
				<li>Gravity: {planet.gravity} </li>
				<li>Terrain: {planet.terrain}</li>
				<li>Surface water: {planet.surface_water}</li>
				<li>Population: {planet.population}</li>
				<li>
					Residents:
					{loading ? (
						<p>Loading residents...</p>
					) : allResidents.length > 0 ? (
						<ul>
							{allResidents.map(resident => (
								<li key={resident.name}>{resident.name}</li>
							))}
						</ul>
					) : (
						<p>No residents found</p>
					)}
				</li>
			</ul>
		</>
	);
};

export default PlanetDetail;
