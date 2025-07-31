import { useState } from "react";
import {
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownList,
  Arrow,
} from "./styled.ts";
import type { CategoriesDropdownProps } from "./types.ts";
import { useClickOutside } from "../../hooks/useClickOutside.ts";
import { useSportOptions } from "../../hooks/useSportOptions.ts";

export default function CategoriesDropdown({
  value,
  onChange,
  sports,
}: CategoriesDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const ref = useClickOutside(() => setIsDropdownOpen(false));
  const { sportOptions, selectedLabel } = useSportOptions(sports, value);

  return (
    <DropdownContainer ref={ref}>
      <DropdownButton
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        aria-haspopup="listbox"
        aria-expanded={isDropdownOpen}
      >
        {selectedLabel}
        <Arrow $isOpen={isDropdownOpen}>▼</Arrow>
      </DropdownButton>

      {isDropdownOpen && (
        <DropdownList role="listbox">
          {sportOptions.map((option) => (
            <DropdownItem
              key={option.value}
              selected={option.value === value}
              onClick={() => {
                onChange(option.value);
                setIsDropdownOpen(false);
              }}
              role="option"
              aria-selected={option.value === value}
            >
              {option.label}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownContainer>
  );
}

CategoriesDropdown.displayName = "CategoriesDropdown";
