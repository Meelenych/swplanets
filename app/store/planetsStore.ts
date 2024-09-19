
import {create} from 'zustand';
import {fetchPlanets} from '../../services/api';
import {Planet} from '../types/types';

interface PlanetState {
  planets: Planet[];
  fetchPlanets: () => Promise<void>;
}

const usePlanetStore = create<PlanetState>((set) => ({
  planets: [],
  fetchPlanets: async () => {
    try {
      const data = await fetchPlanets();
      set({planets: data});
    } catch (error) {
      console.error('Error fetching planets:', error);
    }
  },
}));

export default usePlanetStore;
