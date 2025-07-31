import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SportsExplorer from "./components/SportsExplorer/SportsExplorer.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 60 * 60 * 1000,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SportsExplorer />
    </QueryClientProvider>
  );
}

App.displayName = "App";
