export const useLeagues = () => {
  return useQuery({
    queryKey: ["leagues"],
    queryFn: async () => {
      try {
        const response = await axios.get<LeaguesResponse>(getLeaguesUrl());
        return response.data.leagues || [];
      } catch (error: unknown) {
        if (axios.isAxiosError(error) && error.response) {
          const { status } = error.response;
          let message: string;

          switch (status) {
            case 401:
              message = 'Unauthorized access';
              break;
            case 500:
              message = 'Internal server error';
              break;
            case 503:
              message = 'Service temporarily unavailable';
              break;
            default:
              message = `HTTP ${status}: ${error.response.statusText}`;
          }

          throw { status, message } as ApiError;
        }

        throw { status: 0, message: 'Network error - please check your connection' } as ApiError;
      }
    },
    staleTime: 60 * 60 * 1000,
  });
};