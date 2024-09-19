
import {create} from 'zustand';
import {fetchAllPlanets} from '../../services/api';
import {Planet} from '../types/types';

interface PlanetState {
  planets: Planet[];
  fetchAllPlanets: () => Promise<void>;
}

const usePlanetStore = create<PlanetState>((set) => ({
  planets: [],
  fetchAllPlanets: async () => {
    try {
      const data = await fetchAllPlanets();
      set({planets: data});
      console.log('store', data)
    } catch (error) {
      console.error('Error fetching planets:', error);
    }
  },

}));

export default usePlanetStore;
