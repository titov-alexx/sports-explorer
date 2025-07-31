import type { League } from "../api/types";

export const getAvailableSportsSorted = (leagues: League[]): string[] => {
  return [...new Set(leagues.map((league) => league.strSport))].sort();
};