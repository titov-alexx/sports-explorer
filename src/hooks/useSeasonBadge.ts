import axios from "axios";
import {getSeasonBadgeUrl} from "../api/endpoints.ts";
import {useQuery} from "@tanstack/react-query";
import type {SeasonBadgeResponse} from "../api/types.ts";

export const useSeasonBadge = (leagueId: string | null) => {
  return useQuery({
    queryKey: ["seasonBadge", leagueId],
    queryFn: async () => {
      if (!leagueId) return null;

      try {
        const response = await axios.get<SeasonBadgeResponse>(
          getSeasonBadgeUrl(leagueId)
        );
        const seasons = response.data.seasons || [];

        return seasons.length > 0 ? seasons[0].strBadge : null;
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
          const { status } = error.response;
          switch (status) {
            case 401:
              throw new Error("Unauthorized access");
            case 500:
              throw new Error("Internal server error");
            case 503:
              throw new Error("Service temporarily unavailable");
            default:
              throw new Error(`HTTP ${status}: ${error.response.statusText}`);
          }
        }

        throw new Error("Network error - please check your connection");
      }
    },
    enabled: Boolean(leagueId),
    staleTime: 60 * 60 * 1000,
  });
};
