import { useState, useMemo } from "react";
import {
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownList,
  Arrow,
} from "./styled.ts";
import type { CategoriesDropdownProps } from "./types.ts";
import { useClickOutside } from "../../hooks/useClickOutside.ts";

export default function CategoriesDropdown({
  value,
  onChange,
  sports,
}: CategoriesDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));

  const sortedSports = useMemo(() => [...new Set(sports)].sort(), [sports]);

  const sportOptions = useMemo(
    () => [
      { value: "", label: "All Sports" },
      ...sortedSports.map((sport) => ({
        value: sport,
        label: sport.charAt(0).toUpperCase() + sport.slice(1),
      })),
    ],
    [sortedSports]
  );

  const selectedLabel = useMemo(
    () =>
      sportOptions.find((opt) => opt.value === value)?.label || "All Sports",
    [sportOptions, value]
  );

  return (
    <DropdownContainer ref={ref}>
      <DropdownButton
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {selectedLabel}
        <Arrow $isOpen={open}>▼</Arrow>
      </DropdownButton>

      {open && (
        <DropdownList role="listbox">
          {sportOptions.map((option) => (
            <DropdownItem
              key={option.value}
              selected={option.value === value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
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
