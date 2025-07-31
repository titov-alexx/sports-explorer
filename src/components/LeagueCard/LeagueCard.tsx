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
  onLeagueClick,
}: LeagueCardProps) {
  const {strSport, strLeague, strLeagueAlternate} = league;

  return (
    <LeagueCardContainer onClick={() => onLeagueClick(league)}>
      <LeagueCardContent>
        <LeagueInfo>
          <LeagueName>{strLeague}</LeagueName>
          <LeagueSport>{strSport}</LeagueSport>
          {strLeagueAlternate && (
            <LeagueAlternate>{strLeagueAlternate}</LeagueAlternate>
          )}
        </LeagueInfo>
      </LeagueCardContent>
      {isExpanded && (
        <BadgeContainer>
          <LeagueBadge
            badgeUrl={badgeUrl}
            isLoading={isBadgeLoading}
            leagueName={strLeague}
          />
        </BadgeContainer>
      )}
    </LeagueCardContainer>
  );
}

LeagueCard.displayName = "LeagueCard";
