import { useState, useRef, useEffect } from "react";
import {DropdownButton, DropdownContainer, DropdownItem, DropdownList, Arrow} from "./styled.ts";
import type {CategoriesDropdownProps} from "./types.ts";

export default function CategoriesDropdown({ value, onChange, sports }: CategoriesDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, []);

  const sortedSports = [...new Set(sports)].sort();

  const sportOptions = [
    { value: "", label: "All Sports" },
    ...sortedSports.map((sport) => ({
      value: sport,
      label: sport.charAt(0).toUpperCase() + sport.slice(1),
    })),
  ];

  const selectedLabel =
    sportOptions.find((opt) => opt.value === value)?.label || "All Sports";

  return (
    <DropdownContainer ref={ref}>
      <DropdownButton
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {selectedLabel}
        <Arrow style={{ transform: `translateY(-50%) rotate(${open ? 180 : 0}deg)` }}>
          ▼
        </Arrow>
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
