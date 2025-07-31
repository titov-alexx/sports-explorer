import type {League} from "../../api/types";

export type LeagueCardProps = {
  league: League;
  badgeUrl: string | null;
  isBadgeLoading: boolean;
  isExpanded: boolean;
  onClick: (league: League) => void;
}
