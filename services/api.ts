import axios from "axios";

const apiUrl = "https://swapi.dev/api/planets";

export const fetchPlanets = async () => {
  try {
    const response = await axios.get(apiUrl)
    console.log('planets', response.data.results)
    return response.data.results;
  } catch (error) {
    console.log('Error fetching all planets', error);
    throw error;
  }
}
