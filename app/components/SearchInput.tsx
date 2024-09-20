import React from 'react';

const SearchInput = ({ onSearch }: { onSearch: any }) => {
	return (
		<div>
			<input
				type='text'
				placeholder='Enter planet name'
				className='input input-md rounded-2xl input-bordered input-info w-full max-w-xs'
				onChange={e => onSearch(e.target.value)}
			/>
		</div>
	);
};

export default SearchInput;
