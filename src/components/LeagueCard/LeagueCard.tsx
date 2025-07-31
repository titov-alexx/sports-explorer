import {
  LeagueCardContainer,
  LeagueInfo,
  LeagueName,
  LeagueSport,
  LeagueAlternate,
  LeagueCardContent,
  BadgeContainer,
} from "./styled.ts";
import LeagueBadge from "../LeagueBadge/LeagueBadge.tsx";
import type { LeagueCardProps } from "./types.ts";

export default function LeagueCard({
  league,
  badgeUrl,
  isBadgeLoading,
  isExpanded,
  onClick,
}: LeagueCardProps) {
  return (
    <LeagueCardContainer onClick={() => onClick(league)}>
      <LeagueCardContent>
        <LeagueInfo>
          <LeagueName>{league.strLeague}</LeagueName>
          <LeagueSport>{league.strSport}</LeagueSport>
          {league.strLeagueAlternate && (
            <LeagueAlternate>{league.strLeagueAlternate}</LeagueAlternate>
          )}
        </LeagueInfo>
      </LeagueCardContent>
      {isExpanded && (
        <BadgeContainer>
          <LeagueBadge
            badgeUrl={badgeUrl}
            isLoading={isBadgeLoading}
            leagueName={league.strLeague}
          />
        </BadgeContainer>
      )}
    </LeagueCardContainer>
  );
}

LeagueCard.displayName = "LeagueCard";
