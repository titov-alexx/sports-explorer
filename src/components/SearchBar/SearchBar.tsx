import { SearchInput, ClearText } from "./styled.ts";
import type { SearchBarProps } from "./types.ts";

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div style={{ position: "relative", flex: 1 }}>
      <SearchInput
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={"Start typing a league name ..."}
      />
      {value && (
        <ClearText onClick={() => onChange("")} aria-label="Clear search">
          Clear
        </ClearText>
      )}
    </div>
  );
}

SearchBar.displayName = "SearchBar";
