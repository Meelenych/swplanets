import React from 'react';

const SearchInput = () => {
	return (
		<div>
			<input
				type='text'
				placeholder='Enter planet name'
				className='input input-md rounded-2xl input-bordered input-info w-full max-w-xs'
			/>
		</div>
	);
};

export default SearchInput;
