export const SORT_OPTIONS = [
  { label: 'sort by name (A-Z)', value: 'asc' },
  { label: 'sort by name (Z-A)', value: 'desc' },
] as const;

export type SortOptionValue = (typeof SORT_OPTIONS)[number]['value'];
