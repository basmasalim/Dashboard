export const SORT_OPTIONS = [
  { label: 'A → Z', value: 'asc' },
  { label: 'Z → A', value: 'desc' },
] as const;

export type SortOptionValue = (typeof SORT_OPTIONS)[number]['value'];
