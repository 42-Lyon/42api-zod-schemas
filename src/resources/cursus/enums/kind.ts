import z from "zod";

export const IntraCursusKind = {
	External: "external",
	Main: "main",
	MainDeprecated: "main_deprecated",
	Piscine: "piscine",
	PiscineCommunity: "piscine_community",
	PiscineDeprecated: "piscine_deprecated",
	ProfessionalTraining: "professional_training",
} as const;

export const intraCursusKindSchema = z.enum(IntraCursusKind);

export type IntraCursusKind = z.infer<typeof intraCursusKindSchema>;
