import z from "zod";

// Event kind
export const intraEventKindSchema = z.enum([
	"pedago",
	"rush",
	"piscine",
	"partnership",
	"meet",
	"conference",
	"meet_up",
	"event",
	"association",
	"speed_working",
	"hackathon",
	"workshop",
	"challenge",
	"other",
	"extern",
]);

export const IntraEventKind = intraEventKindSchema.enum;
export type IntraEventKind = z.infer<typeof intraEventKindSchema>;
