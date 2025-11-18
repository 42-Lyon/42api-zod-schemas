import z from "zod";

export const achievementSchema = z.object({
	id: z.number(),
	name: z.string(),
});

export type intraAchievement = z.infer<typeof achievementSchema>;
