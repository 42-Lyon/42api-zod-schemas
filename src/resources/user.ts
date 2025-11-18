import z from "zod";

export const intraUserSchema = z.object({
	id: z.number().positive(),
	login: z.string(),
	'staff?': z.boolean(),
	titles: z.array(
		z.object({
			id: z.number(),
			name: z.string()
		})
	),
	cursus_users: z.array(
		z.object({
			id: z.number().positive(),
			cursus_id: z.number().positive(),
			grade: z.string().nullable(),
		})

	),
});

export type intraUser = z.infer<typeof intraUserSchema>;
