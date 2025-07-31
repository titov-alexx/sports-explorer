type Season = {
  idSeason: string;
  strSeason: string;
  strBadge?: string;
}

export type League = {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate: string;
}

export type ApiError = {
  status: number;
  message: string;
}

export type LeaguesResponse = {
  leagues: League[];
}

export interface SeasonBadgeResponse {
  seasons: Season[];
}