import z from "zod";

export enum IntraCursusKind {
	External = "external",
	Main = "main",
	MainDeprecated = "main_deprecated",
	Piscine = "piscine",
	PiscineCommunity = "piscine_community",
	PiscineDeprecated = "piscine_deprecated",
	ProfessionalTraining = "professional_training",
}

export const intraCursusKindSchema = z.enum(IntraCursusKind);
