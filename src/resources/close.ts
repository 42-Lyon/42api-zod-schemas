import { z } from "zod";

// Define valid values as a tuple with `as const`
const kinds = [
	"agu",
	"other",
	"deserter",
	"black_hole",
	"serious_misconduct",
	"social_security",
	"non_admitted",
	"pace_unknown"
] as const;

// Create the Zod enum schema
export const closeKindSchema = z.enum(kinds);

// Extract the type for usage elsewhere
export type closeKind = z.infer<typeof closeKindSchema>;
