import {create} from 'zustand';
import axios from 'axios';
import {Planet} from '@/app/types/types';
import {PlanetsApiResponse} from '@/app/types/types';

interface PlanetStore {
  planets: Planet[];
  fetchAllPlanets: () => Promise<void>;
}

const usePlanetStore = create<PlanetStore>((set) => ({
  planets: [],
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
}));

export default usePlanetStore;
