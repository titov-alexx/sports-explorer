export const API_CONFIG = {
  BASE_URL: 'https://www.thesportsdb.com/api/v1/json/3',
  ENDPOINTS: {
    ALL_LEAGUES: '/all_leagues.php',
    SEASON_BADGE: '/search_all_seasons.php'
  }
} as const;

export const getLeaguesUrl = () => `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.ALL_LEAGUES}`;
export const getSeasonBadgeUrl = (leagueId: string) => 
  `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.SEASON_BADGE}?badge=1&id=${leagueId}&size=large`; 