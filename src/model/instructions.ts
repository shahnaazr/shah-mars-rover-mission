export const INSTRUCTIONS = ["L", "R", "M"] as const;
export type Instruction = (typeof INSTRUCTIONS)[number];
