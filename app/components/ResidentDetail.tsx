import React from 'react';
import { Resident } from '../types/types';

const ResidentDetail = ({ resident }: { resident: Resident }) => {
	return (
		<div>
			<ul>
				<li>Name: {resident.name}</li>
				<li>Height: {resident.height}</li>
				<li>Mass: {resident.mass}</li>
				<li>Hair color: {resident.hair_color}</li>
				<li>Skin color: {resident.skin_color}</li>
				<li>Eye color: {resident.eye_color}</li>
				<li>Birth year: {resident.birth_year}</li>
				<li>Gender: {resident.gender}</li>
			</ul>
		</div>
	);
};

export default ResidentDetail;
