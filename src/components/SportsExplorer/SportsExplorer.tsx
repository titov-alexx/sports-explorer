import { useState, useMemo, useCallback } from "react";
import {
  Container,
  Header,
  Title,
  Subtitle,
  SearchContainer,
  LeaguesGrid,
  LoadingSpinner,
} from "./styled.ts";
import SearchBar from "../SearchBar/SearchBar.tsx";
import LeagueCard from "../LeagueCard/LeagueCard.tsx";
import ErrorState from "../ErrorState/ErrorState.tsx";
import EmptyState from "../EmptyState/EmptyState.tsx";
import Pagination from "../Pagination/Pagination.tsx";
import { useDebounce } from "../../hooks/useDebounce.ts";
import { useLeagues } from "../../hooks/useLeagues.ts";
import { useSeasonBadge } from "../../hooks/useSeasonBadge.ts";
import { usePagination } from "../../hooks/usePagination/usePagination.ts";
import { getFilteredLeagues } from "../../utils/getFilteredLeagues/getFilteredLeagues.ts";
import CategoriesDropdown from "../CategoriesDropdown/CategoriesDropdown.tsx";
import type { ApiError, League } from "../../api/types.ts";

export default function SportsExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport, setSelectedSport] = useState("");
  const [expandedLeagueId, setExpandedLeagueId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const {
    data: leagues = [],
    isLoading: isLeaguesLoading,
    error: leaguesError,
  } = useLeagues();

  const { data: badgeUrl, isLoading: isBadgeLoading } =
    useSeasonBadge(expandedLeagueId);

  const filteredLeagues = getFilteredLeagues({
    leagues,
    searchQuery: debouncedSearchQuery,
    selectedSport,
  });

  const { totalPages, paginatedItems: paginatedLeagues } = usePagination({
    items: filteredLeagues,
    currentPage,
  });

  const availableSports = useMemo(
    () => [...new Set(leagues.map((league) => league.strSport))].sort(),
    [leagues]
  );

  const onLeagueClick = useCallback(
    (league: League) => {
      if (expandedLeagueId === league.idLeague) {
        setExpandedLeagueId(null);
      } else {
        setExpandedLeagueId(league.idLeague);
      }
    },
    [expandedLeagueId]
  );

  const onPageChange = useCallback((page: number) => {
    setCurrentPage(page);
    setExpandedLeagueId(null);
  }, []);

  if (leaguesError) {
    const apiError = leaguesError as unknown as ApiError;

    return (
      <Container>
        <Header>
          <Title>Sports Explorer</Title>
          <Subtitle>Discover sports leagues around the world</Subtitle>
        </Header>
        <ErrorState
          error={{
            status: apiError?.status || 500,
            message: apiError?.message || "An error occurred",
          }}
        />
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <Title>Sports Explorer</Title>
        <Subtitle>Discover sports leagues around the world</Subtitle>
      </Header>

      <SearchContainer>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <CategoriesDropdown
          value={selectedSport}
          onChange={setSelectedSport}
          sports={availableSports}
        />
      </SearchContainer>

      {isLeaguesLoading ? (
        <LoadingSpinner />
      ) : filteredLeagues.length === 0 ? (
        <EmptyState />
      ) : (
        <>
          <LeaguesGrid>
            {paginatedLeagues.map((league) => (
              <LeagueCard
                key={league.idLeague}
                league={league}
                badgeUrl={
                  expandedLeagueId === league.idLeague ? badgeUrl || null : null
                }
                isBadgeLoading={
                  expandedLeagueId === league.idLeague && isBadgeLoading
                }
                isExpanded={expandedLeagueId === league.idLeague}
                onClick={onLeagueClick}
              />
            ))}
          </LeaguesGrid>

          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          )}
        </>
      )}
    </Container>
  );
}

SportsExplorer.displayName = "SportsExplorer";
