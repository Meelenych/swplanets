import React from 'react';
import { Planet } from '../types/types';

const PlanetDetail = ({ planet }: { planet: Planet }) => {
	console.log('planet from details page', planet);
	return (
		<div>
			<li>
				<ul>
					<li>
						<p>name: {planet.name}</p>
						<p>rotation_period: {planet.rotation_period}</p>
						<p>orbital_period: {planet.orbital_period}</p>
						<p>diameter: {planet.diameter}</p>
						<p>climate: {planet.climate}</p>
						<p>gravity: {planet.gravity} </p>
						<p>terrain: {planet.terrain}</p>
						<p>surface_water: {planet.surface_water}</p>
						<p>population: {planet.population}</p>
						<p>residents: {planet.residents}</p>
						<p>films:{planet.films}</p>
					</li>
				</ul>
			</li>
		</div>
	);
};

export default PlanetDetail;
