import z from "zod";

const tierSchema = z.enum(["none", "easy", "medium", "hard", "challenge"]);
const kindSchema = z.enum(["project", "social", "pedagogy", "scolarity"]);

export const intraAchievementSchema = z.looseObject({
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
	parent: z
		.looseObject({
			id: z.number(),
			name: z.string(),
			description: z.string(),
			tier: tierSchema,
			kind: kindSchema,
			visible: z.boolean(),
			image: z.string().nullable(),
			nbr_of_success: z.number().nullable(),
			users_url: z.url(),
		})
		.nullable(),
	title: z
		.looseObject({
			id: z.number(),
			name: z.string(),
		})
		.nullable(),
});

export type IntraAchievement = z.infer<typeof intraAchievementSchema>;
