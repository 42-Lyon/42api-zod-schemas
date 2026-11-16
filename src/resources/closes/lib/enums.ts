import z from "zod";

// Close kind
export const intraCloseKindSchema = z.enum([
	"agu",
	"other",
	"deserter",
	"black_hole",
	"serious_misconduct",
	"social_security",
	"non_admitted",
	"pace_unknown",
]);

export const IntraCloseKind = intraCloseKindSchema.enum;
export type IntraCloseKind = z.infer<typeof intraCloseKindSchema>;

// Close state
export const intraCloseStateSchema = z.enum(["close", "unclose"]);

export const IntraCloseState = intraCloseStateSchema.enum;
export type IntraCloseState = z.infer<typeof intraCloseStateSchema>;
