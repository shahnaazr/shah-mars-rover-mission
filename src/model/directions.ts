export const DIRECTIONS = ["N", "S", "W", "E"] as const;
export type Direction = (typeof DIRECTIONS)[number];
