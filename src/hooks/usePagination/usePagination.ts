import { useMemo } from "react";
import type {UsePaginationProps} from "./types.ts";
import { getPageNumbers } from "../../utils/getPageNumbers/getPageNumbers.ts";

const ITEMS_PER_PAGE = 15;
const MAX_PAGES_VISIBLE = 5;

export const usePagination = <T>({
  items,
  currentPage,
  maxVisible = MAX_PAGES_VISIBLE,
  itemsPerPage = ITEMS_PER_PAGE,
}: UsePaginationProps<T>) => {
  return useMemo(() => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = items.slice(startIndex, endIndex);

    const pageNumbers = getPageNumbers(currentPage, totalPages, maxVisible);

    return {
      totalPages,
      paginatedItems,
      hasNextPage: currentPage < totalPages,
      hasPrevPage: currentPage > 1,
      pageNumbers,
    };
  }, [items, currentPage, itemsPerPage, maxVisible]);
};
