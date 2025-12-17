import z from "zod";

export const intraAchievementsUserSchema = z.object({
	id: z.number(),
	achievement_id: z.number(),
	user_id: z.number(),
	login: z.string(),
	nbr_of_success: z.number().nullable(),
	url: z.url(),
	created_at: z.coerce.date(),
	updated_at: z.coerce.date()
}).strict();

export type IntraAchievementsUser = z.infer<typeof intraAchievementsUserSchema>;
