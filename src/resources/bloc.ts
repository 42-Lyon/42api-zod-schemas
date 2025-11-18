import z from "zod";

export const intraBlocSchema = z.object({
	id: z.number(),
	campus_id: z.number(),
	cursus_id: z.number(),
	squad_size: z.number(),
	coalitions: z.array(z.object({
		id: z.number(),
		name: z.string(),
		slug: z.string(),
	}))
});

export type intraBloc = z.infer<typeof intraBlocSchema>;
