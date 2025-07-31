import { useMemo } from "react";
import { getPageNumbers } from "../../utils/getPageNumbers/getPageNumbers.ts";
import { PageButton, PaginationContainer } from "./styled.ts";
import type { PaginationProps } from "./types.ts";
import {MAX_PAGES_VISIBLE} from "../../hooks/usePagination/usePagination.ts";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pageNumbers = useMemo(() => {
    return getPageNumbers({ currentPage, totalPages, maxVisible: MAX_PAGES_VISIBLE });
  }, [currentPage, totalPages]);

  return (
    <PaginationContainer>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ←
      </PageButton>

      {pageNumbers.map((page, index) => (
        <PageButton
          key={index}
          $active={page === currentPage}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={page === "..."}
        >
          {page}
        </PageButton>
      ))}

      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        →
      </PageButton>
    </PaginationContainer>
  );
}

Pagination.displayName = "Pagination";
