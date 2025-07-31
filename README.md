# Sports Explorer

A modern, responsive React application for exploring sports leagues around the world. Built with TypeScript, React Query, and styled-components.

## Features

- 🔍 **Search Functionality**: Search leagues by name with 500ms debouncing
- 🏀 **Sport Filtering**: Filter leagues by sport type (Soccer, Basketball, Motorsport, etc.)
- 🏆 **League Badges**: Click on any league to view its season badge
- 💾 **Smart Caching**: React Query caching for 1 hour to avoid unnecessary API calls
- 📱 **Responsive Design**: Beautiful dark theme that works on all devices
- ⚡ **Performance Optimized**: Memoized components and efficient data fetching
- 📄 **Pagination**: Navigate through large datasets with smart pagination

## Tech Stack

- **React 19** with TypeScript
- **React Query** for data fetching and caching
- **Axios** for HTTP requests
- **Styled Components** for styling
- **Vite** for build tooling

## Project Structure

```
src/
├── components/                    # Reusable UI components
│   ├── SearchBar/               # Search input component
│   │   ├── SearchBar.tsx
│   │   ├── styled.ts
│   │   └── types.ts
│   ├── LeagueCard/              # Individual league display
│   │   ├── LeagueCard.tsx
│   │   ├── styled.ts
│   │   └── types.ts
│   ├── LeagueBadge/             # League badge component
│   │   ├── LeagueBadge.tsx
│   │   └── styled.ts
│   ├── ErrorState/              # Error display component
│   │   ├── ErrorState.tsx
│   │   └── styled.ts
│   ├── EmptyState/              # No results state
│   │   ├── EmptyState.tsx
│   │   └── styled.ts
│   ├── Pagination/              # Pagination component
│   │   ├── Pagination.tsx
│   │   ├── styled.ts
│   │   └── types.ts
│   ├── CategoriesDropdown/      # Custom dropdown component
│   │   ├── CategoriesDropdown.tsx
│   │   └── styled.ts
│   └── SportsExplorer/          # Main app component
│       ├── SportsExplorer.tsx
│       └── styled.ts
├── hooks/                       # Custom React hooks
│   ├── useDebounce.ts           # Debounce hook (500ms)
│   ├── useLeagues.ts            # Leagues data fetching
│   ├── useSeasonBadge.ts        # Season badge fetching
│   └── usePagination/           # Pagination logic
│       ├── usePagination.ts
│       └── types.ts
├── utils/                       # Utility functions
│   ├── getFilteredLeagues/      # League filtering logic
│   │   └── getFilteredLeagues.ts
│   ├── getPaginatedItems/       # Data pagination logic
│   │   └── getPaginatedItems.ts
│   ├── getAvailableSports.ts    # Extract unique sports
│   └── getPageNumbers/          # Page number generation
│       └── getPageNumbers.ts
├── api/                         # API configuration
│   ├── endpoints.ts             # API endpoints and URLs
│   └── types.ts                 # API response types
└── App.tsx                     # App entry point with providers
```

## API Integration

The application integrates with [TheSportsDB API](https://www.thesportsdb.com/documentation):

- **All Leagues**: `https://www.thesportsdb.com/api/v1/json/3/all_leagues.php`
- **Season Badge**: `https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?badge=1&id={leagueId}&size=large`

## Key Features Implementation

### 1. Debounced Search

- Custom `useDebounce` hook with 500ms delay
- Client-side filtering for instant results
- Prevents excessive re-renders while typing

### 2. React Query Caching

- 1-hour cache duration for league data
- Automatic background refetching
- Optimistic updates
- Proper error handling with status codes

### 3. Custom Hooks Architecture

- **`useLeagues`**: Fetches and caches league data
- **`useSeasonBadge`**: Fetches badge images for selected leagues
- **`useDebounce`**: Debounces search input
- **`usePagination`**: Handles data pagination and UI pagination

### 4. Utility Functions

- **`getFilteredLeagues`**: Client-side filtering logic
- **`getPaginatedItems`**: Data pagination utilities
- **`getAvailableSports`**: Extract unique sports from leagues
- **`getPageNumbers`**: Generate pagination UI numbers

### 5. Component Architecture

- **Modular Design**: Each component in its own folder with styled components
- **Type Safety**: Comprehensive TypeScript interfaces
- **Performance**: Memoized components and optimized re-renders
- **Accessibility**: Proper ARIA attributes and keyboard navigation

### 6. Error Handling

- Comprehensive error states for 401, 500, and 503 status codes
- User-friendly error messages
- Graceful fallbacks for network issues
- Proper error boundaries

### 7. Responsive Design

- Mobile-first approach
- Dark theme with gradient backgrounds
- Smooth animations and transitions
- Minimum width constraints to prevent layout breaking

### 8. Pagination System

- Smart pagination with ellipsis for large datasets
- 15 items per page
- Responsive pagination controls
- Proper state management for page changes

## Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Usage

1. **Search Leagues**: Type in the search bar to filter leagues by name (500ms debounce)
2. **Filter by Sport**: Use the custom dropdown to filter by specific sport types
3. **View Badges**: Click on any league card to load and display the league badge
4. **Navigate Pages**: Use pagination controls to browse through large datasets
5. **Responsive**: The app works seamlessly on desktop, tablet, and mobile devices

## Performance Optimizations

- ✅ Debounced search to reduce re-renders
- ✅ React Query caching for 1 hour
- ✅ Memoized components to prevent unnecessary re-renders
- ✅ Client-side filtering for instant results
- ✅ Optimized pagination with smart page number generation
- ✅ Lazy loading of badge images
- ✅ Optimized bundle size with Vite
- ✅ Proper error boundaries and fallbacks

## Error States

The application handles various error scenarios:

- **Network errors**: Connection issues with user-friendly messages
- **401 Unauthorized**: API access denied
- **500 Internal Server Error**: Server issues
- **503 Service Unavailable**: API maintenance
- **Empty results**: No leagues match the search criteria
- **Image loading errors**: Graceful fallbacks for badge images

## Code Quality

- **TypeScript**: Full type safety throughout the application
- **ESLint**: Code quality and consistency
- **Modular Architecture**: Clear separation of concerns
- **Reusable Components**: Well-structured component hierarchy
- **Custom Hooks**: Encapsulated business logic
- **Utility Functions**: Pure functions for data manipulation

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - feel free to use this project for your own applications.
