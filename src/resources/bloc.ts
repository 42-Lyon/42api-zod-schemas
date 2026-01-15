import z from "zod";

export const intraBlocSchema = z.looseObject({
	id: z.number(),
	campus_id: z.number(),
	cursus_id: z.number(),
	squad_size: z.number(),
	coalitions: z.array(
		z.looseObject({
			id: z.number(),
			name: z.string(),
			slug: z.string(),
		}))
});

export type IntraBloc = z.infer<typeof intraBlocSchema>;
