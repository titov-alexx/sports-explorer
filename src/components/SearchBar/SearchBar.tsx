import { useCallback } from "react";
import type { ChangeEvent } from "react";
import { SearchInput, ClearText, SearchContainer } from "./styled.ts";
import type { SearchBarProps } from "./types.ts";

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const onValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  const onClear = useCallback(() => {
    onChange("");
  }, [onChange]);

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={value}
        onChange={onValueChange}
        placeholder={"Start typing a league name ..."}
      />
      {value && (
        <ClearText onClick={onClear} aria-label="Clear search">
          Clear
        </ClearText>
      )}
    </SearchContainer>
  );
}

SearchBar.displayName = "SearchBar";
