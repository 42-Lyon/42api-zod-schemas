import z from "zod";

const kinds = [
	"external",
	"main",
	"main_deprecated",
	"piscine",
	"piscine_community",
	"piscine_deprecated",
	"professional_training",
] as const;

export const intraCursusKindSchema = z.enum(kinds);

export const IntraCursusKinds = intraCursusKindSchema.enum;

export type IntraCursusKind = z.infer<typeof intraCursusKindSchema>;
