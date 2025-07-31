import { useMemo } from "react";
import { getPageNumbers } from "../../utils/getPageNumbers/getPageNumbers.ts";
import { PageButton, PaginationContainer } from "./styled.ts";
import type { PaginationProps } from "./types.ts";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pageNumbers = useMemo(() => {
    return getPageNumbers(currentPage, totalPages, 5);
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
