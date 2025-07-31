import {
  EmptyState as StyledEmptyState,
  EmptyStateIcon,
  EmptyStateMessage,
} from "./styled.ts";

export default function EmptyState () {
  return (
    <StyledEmptyState>
      <EmptyStateIcon>🔍</EmptyStateIcon>
      <EmptyStateMessage>
        Oops, no results matching your search. Please try a different search query.
      </EmptyStateMessage>
    </StyledEmptyState>
  );
};

EmptyState.displayName = "EmptyState";
