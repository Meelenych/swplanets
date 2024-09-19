import React from 'react';
// import { fetchResidentById } from '../../../../services/api';
// import ResidentDetail from '../../../../components/ResidentDetail';

const ResidentDetailPage = async ({
	params,
}: {
	params: { residentId: string };
}) => {
	// const resident = await fetchResidentById(params.residentId);

	return <div>{/* <ResidentDetail resident={resident} /> */}</div>;
};

export default ResidentDetailPage;
