import {
  LeagueCardContainer,
  LeagueInfo,
  LeagueName,
  LeagueSport,
  LeagueAlternate,
} from "./styled.ts";
import LeagueBadge from "../LeagueBadge/LeagueBadge.tsx";
import type {LeagueCardProps} from "./types.ts";

export default function LeagueCard ({
  league,
  badgeUrl,
  isBadgeLoading,
  isExpanded,
  onClick,
}: LeagueCardProps) {

  return (
    <LeagueCardContainer onClick={() => onClick(league)}>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <LeagueInfo>
          <LeagueName>{league.strLeague}</LeagueName>
          <LeagueSport>{league.strSport}</LeagueSport>
          {league.strLeagueAlternate && (
            <LeagueAlternate>{league.strLeagueAlternate}</LeagueAlternate>
          )}
        </LeagueInfo>
      </div>
      {isExpanded && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "10px",
          }}
        >
          <LeagueBadge
            badgeUrl={badgeUrl}
            isLoading={isBadgeLoading}
            leagueName={league.strLeague}
          />
        </div>
      )}
    </LeagueCardContainer>
  );
};

LeagueCard.displayName = "LeagueCard";

