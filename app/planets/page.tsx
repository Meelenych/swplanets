'use client';
import React from 'react';
import PlanetList from '../components/PlanetList';
import SearchInput from '../components/SearchInput';

const PlanetsPage = () => {
	return (
		<div>
			<SearchInput />
			<PlanetList />
		</div>
	);
};

export default PlanetsPage;
