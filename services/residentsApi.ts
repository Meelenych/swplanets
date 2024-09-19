import axios from 'axios';

export const fetchResidents = async (planet: {residents: string[]}) => {
  try {
    const residentRequests = planet.residents.map((url: string) => axios.get(url));
    const residentResponses = await Promise.all(residentRequests);
    const residentsData = residentResponses.map(response => response.data);

    return residentsData;
  } catch (error) {
    console.error('Error fetching residents:', error);
    return [];
  }
};
