import type {League} from "../../api/types";

export type LeagueCardProps = {
  league: League;
  badgeUrl: string | null;
  isBadgeLoading: boolean;
  isExpanded: boolean;
  onLeagueClick: (league: League) => void;
}
