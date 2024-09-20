'use client';
import React, { useState } from 'react';
import PlanetList from '../components/PlanetList';
import SearchInput from '../components/SearchInput';

const PlanetsPage = () => {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<div className='flex flex-col items-center w-full h-lvh'>
			<SearchInput onSearch={setSearchTerm} />
			<PlanetList searchTerm={searchTerm} />
		</div>
	);
};

export default PlanetsPage;
