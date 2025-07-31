import type {League} from "../../api/types.ts";

export type UseFilteredLeaguesProps = {
  leagues: League[];
  searchQuery: string;
  selectedSport: string;
}