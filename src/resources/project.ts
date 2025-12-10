import z from "zod";

export const intraProjectSchema = z.object({
	id: z.number(),
	name: z.string(),
	slug: z.string(),
	children: z.array(
		z.object({
			name: z.string(),
			id: z.number()
		})
	),
	project_sessions: z.array(
		z.object({
			id: z.number(),
			description: z.string(),
			begin_at: z.string().nullable(),
			end_at: z.string().nullable(),
			campus_id: z.number().nullable()
		})
	)
});

export type intraProject = z.infer<typeof intraProjectSchema>;

/******************************************************************************/

export const intraProjectsUserSchema = z.object({
	id: z.number(),
	user: z.object({
		id: z.number(),
		login: z.string()
	}),
	teams: z.array(
		z.object({
			id: z.number()
		})
	),
});

export type intraProjectsUser = z.infer<typeof intraProjectsUserSchema>;
