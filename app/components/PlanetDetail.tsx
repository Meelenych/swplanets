import React from 'react';
import { Planet } from '../types/types';

const PlanetDetail = ({ planet }: { planet: Planet }) => {
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
				<li>Residents: {planet.residents}</li>
			</ul>
		</>
	);
};

export default PlanetDetail;
