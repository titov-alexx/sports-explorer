export type UsePaginationProps<T> = {
  items: T[];
  currentPage: number;
  maxVisible?: number;
  itemsPerPage?: number;
}