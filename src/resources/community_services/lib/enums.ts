import z from "zod";

export const intraCommunityServiceStateSchema = z.enum([
	"beginning",
	"schedule",
	"finish",
	"validated",
	"invalidated",
]);

export const IntraCommunityServiceState = intraCommunityServiceStateSchema.enum;
export type IntraCommunityServiceState = z.infer<typeof intraCommunityServiceStateSchema>;
