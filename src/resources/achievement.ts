import z from "zod";

export const achievementSchema = z.object({
	id: z.number(),
	name: z.string(),
	description: z.string(),
	tier: z.enum(['none', 'easy', 'medium', 'hard', 'challenge']),
	kind: z.enum(['project', 'social', 'pedagogy', 'scolarity']),
	visible: z.boolean(),
	image: z.string().nullable(),
	nbr_of_success: z.number().nullable(),
	users_url: z.url(),
	campus: z.array(z.string()),
	achievements: z.array(z.string()),
	parent: z.object({
		id: z.number(),
		name: z.string(),
		description: z.string(),
		tier: z.string(),
		kind: z.string(),
		visible: z.boolean(),
		image: z.string().nullable(),
		nbr_of_success: z.number().nullable(),
		users_url: z.url()
	}).strict().nullable(),
	title: z.object({
		id: z.number(),
		name: z.string()
	}).strict().nullable(),
}).strict();

export type intraAchievement = z.infer<typeof achievementSchema>;
