import {useMemo} from "react";
import type {UseFilteredLeaguesProps} from "./types.ts";

export const getFilteredLeagues = ({ leagues, searchQuery, selectedSport }: UseFilteredLeaguesProps) => {
  return useMemo(() => {
    return leagues.filter((league) => {
      const matchesSport = !selectedSport || league.strSport === selectedSport;

      const matchesSearch =
        !searchQuery.trim() ||
        league.strLeague
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        league.strLeagueAlternate
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase());

      return matchesSport && matchesSearch;
    });
  }, [leagues, searchQuery, selectedSport]);
}; 