import { useMemo } from "react";

export const useSportOptions = (sports: string[], selectedValue: string) => {
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
      sportOptions.find((opt) => opt.value === selectedValue)?.label ||
      "All Sports",
    [sportOptions, selectedValue]
  );

  return {
    sportOptions,
    selectedLabel,
  };
};
