import {create} from 'zustand';
import axios from 'axios';
import {Planet, Resident} from '@/app/types/types';
import {PlanetsApiResponse} from '@/app/types/types';

interface PlanetStore {
  planets: Planet[];
  residents: Record<string, Resident[]>;
  fetchAllPlanets: () => Promise<void>;
  fetchResidents: (planetName: string) => Promise<void>;
}

const usePlanetStore = create<PlanetStore>((set) => ({
  planets: [],
  residents: {},
  fetchAllPlanets: async () => {
    if (usePlanetStore.getState().planets.length === 0) {
      try {
        let allPlanets: Planet[] = [];
        let nextPageUrl: string | null = 'https://swapi.dev/api/planets';

        while (nextPageUrl) {
          const response: PlanetsApiResponse = await axios.get(nextPageUrl);
          const {results, next} = response.data;

          allPlanets = [...allPlanets, ...results];
          nextPageUrl = next;
        }

        set({planets: allPlanets});
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    }
  },
  fetchResidents: async (planetName: string) => {
    try {
      const planet = usePlanetStore.getState().planets.find(p => p.name === planetName);
      if (planet && planet.residents.length > 0) {
        const residentRequests = planet.residents.map(url => axios.get(url));
        const residentResponses = await Promise.all(residentRequests);
        const residentsData = residentResponses.map(response => response.data);

        set(state => ({
          residents: {
            ...state.residents,
            [planetName]: residentsData,
          },
        }));
      }
    } catch (error) {
      console.error('Error fetching residents:', error);
    }
  },
}));

export default usePlanetStore;
