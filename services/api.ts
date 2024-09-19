import axios from "axios";
import {apiUrl} from "@/app/utils/constants";
import {Planet} from "@/app/types/types";
import {PlanetsApiResponse} from '@/app/types/types'


export const fetchAllPlanets = async (): Promise<Planet[]> => {
  let allPlanets: Planet[] = [];
  let nextPageUrl: string | null = apiUrl;

  try {
    while (nextPageUrl) {
      const response: PlanetsApiResponse = await axios.get(nextPageUrl);
      const {results, next}: {results: Planet[]; next: string | null} = response.data;

      allPlanets = [...allPlanets, ...results];
      nextPageUrl = next;
    }
  } catch (error) {
    console.error('Error fetching planets:', error);
  }

  return allPlanets;
};
