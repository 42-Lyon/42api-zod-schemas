import z from "zod";

const tierSchema = z.enum(['none', 'easy', 'medium', 'hard', 'challenge']);
const kindSchema = z.enum(['project', 'social', 'pedagogy', 'scolarity']);

export const intraAchievementSchema = z.object({
	id: z.number(),
	name: z.string(),
	description: z.string(),
	tier: tierSchema,
	kind: kindSchema,
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
		tier: tierSchema,
		kind: kindSchema,
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

export type IntraAchievement = z.infer<typeof intraAchievementSchema>;
